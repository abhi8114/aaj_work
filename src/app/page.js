import Test from "./components/Test";
import Hero from "./components/Hero";
import HeroDeets from "./components/HeroDeets";
import BookShipmentForm from "./components/BookShipmentForm";
import Cards from "./components/Cards";
import ComparisonTable from "./components/ComparisonTable";
import AccordionWithImage from "./components/AccordianWithImg";
export default function Home() {
  return (
    <div >
     <Hero />
     <HeroDeets />
     <Cards />
     <ComparisonTable />
     <AccordionWithImage/>
    </div>
  );
}
