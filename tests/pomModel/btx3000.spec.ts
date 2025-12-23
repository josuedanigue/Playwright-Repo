import { test } from "@playwright/test";
import { login } from "../utils/login";
import { DashboardPage } from "../pages/DashboardPage";
import { riskObjectMenu } from "../pages/RiskObjectMenu";
import { CarRiskobject } from "../pages/carRiskobject";

test ('performbtx3000',async({page})=>{
    const dashboard = new DashboardPage(page);
    const riskMenu = new riskObjectMenu(page);
    const carRO = new CarRiskobject(page);

    await login(page)

    await dashboard.waitForDashboard();
    await dashboard.clickRiskobject();
    await riskMenu.selectRandomRisk();
    await carRO.btx3000RO({

         name: 'Mona Lisa',
          wkz: '005',
          hsn: '1200',
         tsn: '155',
         kw: '0101',
         model: 'Audi Q3 ',
         registrationDate: '2025-05-10',
         value: '95700'
        
    });

})