import { test} from "@playwright/test";
import { login } from "../utils/login";
import { DashboardPage } from "../pages/DashboardPage";
import { riskObjectMenu} from "../pages/RiskObjectMenu";
import { RiskObjectDetailsPage } from "../pages/RiskObjectDetailsPage";

test('upload Document', async({page})=>{
    
    const dashboard = new DashboardPage(page);
    const riskMenu = new riskObjectMenu(page);
    const details = new RiskObjectDetailsPage(page);

    //login
     await login(page);
     //go to dashboard
     await dashboard.waitForDashboard();
     await dashboard.clickRiskobject();

    // pick random RO
    const { riskId } = await riskMenu.selectRandomRisk();
    await details.gotoDocumetTab(riskId);
})