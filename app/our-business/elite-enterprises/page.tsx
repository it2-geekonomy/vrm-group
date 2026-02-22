import BusinessDetailContent from "@/components/sections/BusinessDetail/BusinessDetailContent";
import { eliteEnterprisesData } from "@/data/business/elite-enterprises";

export default function EliteEnterprisesPage() {
  return <BusinessDetailContent data={eliteEnterprisesData} />;
}
