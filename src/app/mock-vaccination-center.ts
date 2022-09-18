import { VaccinationCenter } from "./vaccination-center";

export const CENTERS: VaccinationCenter[] = [
    {id:1, name:"Hôpital Central", address: "Rue Lionnois", postalCode: "54000", city: "Nancy", openingDate: new Date(2021, 3, 12)},
    {id:2, name:"Grand centre de vaccination", address: "45, Avenue de Manchester", postalCode: "08000", city: "Charleville-Mézières", openingDate: new Date(2022, 3, 12)},
    {id:3, name:"Centre des congrès", address: "16, Rue de la Société Française", postalCode: "18100", city: "Vierzon", openingDate: new Date(2021, 6, 12)},
    {id:4, name:"Cure médicale de la Croix Duchet", address: "rue de la Croix Duchet", postalCode: "18200", city: "Saint-Amand-Montrond", openingDate: new Date(2021, 8, 12)},
    {id:5, name:"Service de maladies infectieuses", address: "4, Rue Larrey", postalCode: "49100", city: "Angers", openingDate: new Date(2021, 9, 12)}
  ]