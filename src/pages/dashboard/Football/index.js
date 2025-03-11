import Layout from "../layout";
import { useEffect, useState } from "react";
import data from "../../../data.json"; // Example data
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import VerticalTabs from "../../../component/taps";
import { fetchFixtures, fetchLeagues } from "../../../action/action";
import fixtures from "../../../fixtures.json";
import Spinner from "../../../component/spinner";

export default function Football() {
  const [leagues, setLeagues] = useState(null); // All leagues grouped by country
  const [selectedLeagues, setSelectedLeagues] = useState([]); // Leagues for the selected country
  const [expandedCountry, setExpandedCountry] = useState(null); // The expanded country's name
  const [value, setValue] = useState(0); // State for tabs
  const [features, setFeatures] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingFixtures, setLoadingFixtures] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const fetchLeagueData = async () => {
    try {
      setLoading(true);
      const data = await fetchLeagues();
      console.log(data)
      if (data.status < 202) {
        const datas = data.data.data.response;
        const countriesWithLeagues = [];

        // Create the structure with country and its leagues
        datas.forEach((entry) => {
          const country = entry.country.name;
          const league = {
            id: entry.league.id,
            name: entry.league.name,
            logo: entry.league.logo,
            type: entry.league.type,
          };

          const countryObj = countriesWithLeagues.find(
            (c) => c.country.name === country
          );

          if (countryObj) {
            countryObj.leagues.push(league);
          } else {
            countriesWithLeagues.push({
              country: {
                code: entry.country.code,
                flag: entry.country.flag,
                name: entry.country.name,
              },
              leagues: [league],
            });
          }
        });

        // Define top 5 countries and their league order
        const topFiveCountries = [
          "England",
          "Spain",
          "Germany",
          "Italy",
          "France",
        ];

        const leagueOrderMap = {
          England: [
            "Premier League",
            "Championship",
            "League One",
            "League Two",
            "National League",
          ],
          Spain: [
            "La Liga",
            "Segunda División",
            "Primera Federación",
            "Segunda Federación",
            "Tercera Federación",
          ],
          Germany: [
            "Bundesliga",
            "2. Bundesliga",
            "3. Liga",
            "Regionalliga",
            "Oberliga",
          ],
          Italy: ["Serie A", "Serie B", "Serie C", "Serie D", "Coppa Italia"],
          France: [
            "Ligue 1",
            "Ligue 2",
            "National",
            "National 2",
            "Coupe de France",
          ],
        };

        // Sort countries, prioritize top 5
        countriesWithLeagues.sort((a, b) => {
          const aCountry = a.country.name;
          const bCountry = b.country.name;

          const aIndex = topFiveCountries.indexOf(aCountry);
          const bIndex = topFiveCountries.indexOf(bCountry);

          if (aIndex !== -1 && bIndex !== -1) {
            return aIndex - bIndex;
          }
          if (aIndex !== -1) return -1;
          if (bIndex !== -1) return 1;

          return aCountry.localeCompare(bCountry);
        });

        // Sort leagues and limit them
        countriesWithLeagues.forEach((countryObj) => {
          const countryName = countryObj.country.name;
          const customLeagueOrder = leagueOrderMap[countryName] || [];

          // Sort leagues according to the custom order
          countryObj.leagues.sort((a, b) => {
            const aIndex = customLeagueOrder.indexOf(a.name);
            const bIndex = customLeagueOrder.indexOf(b.name);

            if (aIndex !== -1 && bIndex !== -1) {
              return aIndex - bIndex;
            }
            if (aIndex !== -1) return -1;
            if (bIndex !== -1) return 1;

            return a.name.localeCompare(b.name);
          });

          // Limit the number of leagues displayed
          
          if (topFiveCountries.includes(countryName)) {
            countryObj.leagues = countryObj.leagues.slice(0, 5);
          } else {
            countryObj.leagues = countryObj.leagues.slice(0, 3);
          }
        });

        setLeagues(countriesWithLeagues);
        const firstLeague = countriesWithLeagues[0].leagues
        console.log(countriesWithLeagues)
        await handleCountryLeague(firstLeague, countriesWithLeagues[0].country.name)
      } else {
        alert(data.message);
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  // Handle tab clicks and set leagues for the selected country
  const handleCountryLeague = async (leagues, country) => {
    try {
      setLoadingFixtures(true);
      let leagueArray = [];
      leagues.map((league) => {
        const leagueData = {
          country: country,
          leagueId: league.id,
          name: league.name,
        };
        leagueArray.push(leagueData);
      });

      const body = {
        data: leagueArray,
      };
      const data = await fetchFixtures(body);
      setFeatures(data.data);
    } catch (error) {
    } finally {
      setLoadingFixtures(false);
    }
  };

  useEffect(() => {
    fetchLeagueData(); // Fetch and sort data on component mount
  }, []);

  return (
    <Layout>
      {!loading && (
        <div className="flex flex-row overflow-hidden h-[100vh]">
          <div className="w-full">
            <Box sx={{ maxWidth: { xs: 320, sm: "100%" }, bgcolor: "#330034" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
                sx={{ color: "orangered", fontSize: "50px" }}
              >
                {leagues &&
                  leagues.map((countryObj, index) => (
                    <Tab
                      key={countryObj.country.name}
                      label={countryObj.country.name}
                      onClick={() => handleCountryLeague(countryObj.leagues, countryObj.country.name)} // Pass the leagues when the tab is clicked
                      sx={{ color: "white" }}
                    />
                  ))}
              </Tabs>
            </Box>
            <VerticalTabs fixtures={features} />
          </div>
        </div>
      )}
      <Spinner loading={loading} />
    </Layout>
  );
}
