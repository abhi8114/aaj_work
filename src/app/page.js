import Test from "./components/Warning";
import Hero from "./components/Hero";
import HeroDeets from "./components/HeroDeets";
import BookShipmentForm from "./components/BookShipmentForm";
import Cards from "./components/Cards";
import ComparisonTable from "./components/ComparisonTable";
import AccordionWithImage from "./components/AccordianWithImg";
import TransportationDeets from "./components/TransportationDeets";
import FaqAccordion from "./components/FaqAccordion";
import LatestBlogs from "./components/LatestBlogs";
import Warning from "./components/Warning";
export default function Home() {
  return (
    <div >
     <Hero />
     <HeroDeets />
     <Cards />
     <ComparisonTable />
     <AccordionWithImage/>
     <TransportationDeets />
     <FaqAccordion />
     <LatestBlogs />
     <Warning />
    </div>
  );
}
