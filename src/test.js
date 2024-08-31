import { Login } from "@pages/login";
import { Process } from "@pages/process";
import { NavigationHelper } from "@helpers/navigationHelper";
import { ModelerElementDestinationRedirect } from "@pages/modelerElementDestinationRedirect";
import { Requests } from "@pages/requests";
import { Utility } from "@pages/utility";
import { Admin } from "@pages/admin";
import { Screens } from "@pages/screens";
import { ABTesting } from "@pages/abTesting";

const login = new Login();
const navHelper = new NavigationHelper();
const process = new Process();
const modelerElementDestinationRedirect = new ModelerElementDestinationRedirect();
const request = new Requests();
const utility = new Utility();
const admin = new Admin();
const screen = new Screens();
const abTesting = new ABTesting();

let processName = "TCP4-3724 Verify that the element destination redirects to Custom Dashboard";
let processFilePath = "processes/tcp4-3724_verify_that_the_element_destination_redirects_to_custom_dashboard.json";
let username = "userTCP43724";
let firstName = "userTCP43724firstName";
let lastName = "userTCP43724lastName";
let email = "userTCP43724@gmail.com";
let jobTitle = "QA";
let status = "ACTIVE";
let password = "********";
let timeStamp = new Date().getTime();
let screenName = "screenToDashboardTCP43724";
let screenFilePath = "screens_data/screenToDashboardTCP43724.json";
let dashboardName = `${timeStamp}DashTCP43724`;
let descriptionDashboard = `DescriptionScreenTCP43724`;
let requestId;

describe(
    "Verify that the element destination redirects to Custom Dashboard",
    { tags: "newFeature" },
    () => {
        beforeEach(() => {
            login.navigateToUrl();
            login.login();
        });

        it("Import process", () => {
            navHelper.navigateToProcessPage();
            process.verifyPresenceOfProcessAndImportProcess(
                processName,
                processFilePath
            );
        });

        it("Import screen to dashboard", () => {
            navHelper.navigateToScreensPage();
            screen.verifyPresenceOfScreenAndImportScreen(
                screenName,
                screenFilePath
            );
        });

        it("Create Dashboard", () => {
            navHelper.navigateToDashobardPage();
            admin.addDashboard(dashboardName, screenName, descriptionDashboard);
        });

        it("Create new user", () => {
            navHelper.navigateToAdminUserPage();
            admin.createUserIfNotExist(
                username,
                firstName,
                lastName,
                jobTitle,
                status,
                email,
                password
            );
        });

        it("Assign dashboard to tasks", () => {
            navHelper.navigateToProcessPage();
            process.searchProcessAndSelectOptions(processName, "edit");
            cy.wait(1000);
            modelerElementDestinationRedirect.configureElementDestinationInTask(
                "TCP43724A",
                {
                    option: "Custom Dashboard",
                    dashboardName: dashboardName,
                    url: null,
                }
            );
            cy.reload();
            modelerElementDestinationRedirect.configureElementDestinationInTask(
                "TCP43724B",
                {
                    option: "Custom Dashboard",
                    dashboardName: dashboardName,
                    url: null,
                }
            );
        });

        it("Assign new user to tasks", () => {
            navHelper.navigateToProcessPage();
            process.searchProcessAndSelectOptions(processName, "edit");

            // Assign new user to Form Task (TCP43724A)
            abTesting.configureAssignmentRulesInTask({
                elementName: "TCP43724A",
                assignmentType: "Users/Groups",
                userGroup: username,
                variableName: null,
                value: null,
            });

            cy.reload();

            // Assign new user to Manual Task (TCP43724B)
            abTesting.configureAssignmentRulesInTask({
                elementName: "TCP43724B",
                assignmentType: "Users/Groups",
                userGroup: username,
                variableName: null,
                value: null,
            });
        });

        it("First Scenario: Form Task", () => {
            navHelper.navigateToRequestsPage();
            request.openNewRequest(processName);
            cy.url().then((url) => {
                requestId = url.split("/")[4].trim();
                request.openRequestById(requestId);
                request.clickOnTaskName(1, 1);
                utility.fillLineInput("New Checkbox", 1, true);
                utility.clickButton("New Submit", 1);
            });
            // Validation
            cy.get('[name="screenToDashboardTCP43724"]').should(
                "contain",
                "DASHBOARD TCP43724"
            );
        });

        describe(
            "Verify that the element destination redirects to Custom Dashboard for Manual Task",
            { tags: "newFeature" },
            () => {
                beforeEach(() => {
                    login.navigateToUrl();
                    login.login(username, password);
                });

                it("Second Scenario: Manual Task", () => {
                    request.openRequestById(requestId);
                    request.clickOnTaskName(1, 1);
                    cy.get(".card-footer > .btn").click({ force: true });
                    // Validation
                    cy.get('[name="screenToDashboardTCP43724"]').should(
                        "contain",
                        "DASHBOARD TCP43724"
                    );
                });
            }
        );
    }
);