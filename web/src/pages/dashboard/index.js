import Layout from "./layout";
import TabButton from "@/element/TabButton";
import { useState } from "react";
import { useTransition } from "react";
import NavbarSection from "@/component/Navbar";


export default function DashHome() {
  
  const TAB_DATA = [
     {
          title:"All Courses",
          id: "All Courses",
          content: (
               <div>
                    <h1>All Courses</h1>
               </div>
          ),
     },
     {
          title:"Product Management",
          id: "Product Management",
          content: (
               <div>
                    <h1>Product Management</h1>
               </div>
          ),
     },
     {
          title: "Law",
          id: "law",
          content: (
               <div>
                    <h1>law</h1>
               </div>
          ),
     },
     {
          title: "Electric Engineering",
          id: "Electric Engineering",
          content: (
               <div>
                    <h1>Electric Engineering</h1>
               </div>
          ),
     },
     {
          title: "Front-End",
          id: "Front-End",
          content: (
               <div>
                    <h1>Front-End</h1>
               </div>
          ),
     },
     {
          title: "Smart Contract",
          id: "Smart Contract",
          content: (
               <div>
                    <h1>Smart Contract</h1>
               </div>
          ),
          
     },
  ]

 
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
   
  const handleTabChange = (id) => {
       startTransition(() => {
         setTab(id);
       });
  };


  return (
     <>
     
    <Layout>
    
     
      <section>
        <div>
       
          <h3 className="text-white text-xl sm:text-3xl font-bold leading-10">
            Home
          </h3>

          
        </div>

        
      </section>

      
    </Layout>
    </>
  );
}