import CTA from "@/app/components/CTA/CTA";
import Header from "@/app/components/Header/Header";
import PropertiesFeatures from "@/app/components/PropertiesFeatures/PropertiesFeatures";
import SearchAndFilters from "@/app/components/PropertiesPage/SearchAndFilters/SearchAndFilters";

export const metadata = {
  title: "Estatein Real Estate | Properties",
  description: "Buy Your Dream Home",
};

const Properties = () => {
  return (
    <div>
      <Header />
      <SearchAndFilters />
      <PropertiesFeatures />
      <CTA />
    </div>
  );
};

export default Properties;
