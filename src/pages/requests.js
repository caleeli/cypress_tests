export class Requests {
    /**
     * Clicks on the task name at the specified row and column index.
     * @param rowIndex - The index of the row.
     * @param coloumnIndex - The index of the column.
     */
    clickOnTaskName(rowIndex, coloumnIndex) {
        // Method to click on task name
    }

    /**
     * Waits until the request is completed within the specified timeout period.
     * @param timeOut - The maximum time to wait for the request to complete.
     * @returns {Promise<boolean>} - Returns true if the request is completed, otherwise false.
     */
    async waitUntilTheRequestIsCompleted(timeOut) {
        // Method to wait until the request is completed
    }

    /**
     * Checks if the process is in progress for the given request ID.
     * @param requestId - The ID of the request.
     */
    processIsInprogress(requestId) {
        // Method to check if the process is in progress
    }

    /**
     * Opens a request by its ID.
     * @param requestId - The ID of the request.
     */
    openRequestById(requestId) {
        // Method to open a request by ID
    }

    /**
     * Opens a request by the process name.
     * @param processName - The name of the process.
     */
    openRequestByName(processName) {
        // Method to open a request by name
    }

    /**
     * Adds the request name to the select list for filtering.
     * @param processName - The name of the process to filter.
     */
    addRequestNameToSelectList(processName) {
        // Method to add request name to select list
    }

    /**
     * Retrieves the request ID from the current URL.
     * @returns {Promise<string>} - The request ID.
     */
    async getRequestID() {
        // Method to get the request ID
    }

    /**
     * Verifies if the task is completed.
     */
    verifyTaskIsCompleted() {
        // Method to verify task is completed
    }

    /**
     * Verifies if the task is completed with a delay.
     */
    verifyTaskIsCompletedB() {
        // Method to verify task is completed with a delay
    }

    /**
     * Verifies if the task is completed without checking for a message.
     */
    verifyTaskIsCompletedWithoutMessage() {
        // Method to verify task completion without checking for a message
    }

    /**
     * Clicks on the submit button.
     */
    clickOnSubmitButton() {
        // Method to click on the submit button
    }

    /**
     * Opens a task by its name.
     * @param taskName - The name of the task.
     */
    openTask(taskName) {
        // Method to open a task by name
    }

    /**
     * Verifies if the request is completed for the given request ID.
     * @param requestId - The ID of the request.
     */
    verifyRequestisCompleted(requestId) {
        // Method to verify request is completed
    }

    /**
     * Completes a manual task.
     */
    manualtaskcomplete() {
        // Method to complete a manual task
    }

    /**
     * Verifies if a task is completed.
     */
    verifytaskiscompleted() {
        // Method to verify task is completed
    }

    /**
     * Navigates to a completed request by its name.
     * @param name - The name of the completed request.
     */
    gotocompletedrequest(name) {
        // Method to navigate to a completed request
    }

    /**
     * Clicks on the file manager.
     */
    clickonfilemanager() {
        // Method to click on the file manager
    }

    /**
     * Starts a new request by the number of the start button.
     * @param processName - The name of the process.
     * @param nroButton - The number of the start button.
     */
    openNewRequestByNumberStartButton(processName, nroButton) {
        // Method to start a new request by number start button
    }

    /**
     * Presses the start button for a process.
     * @param processName - The name of the process.
     * @param nroButton - The number of the start button.
     */
    pressStartBTN(processName, nroButton) {
        // Method to press start button for a process
    }

    /**
     * Opens a task by its task name after a request is created.
     * @param taskName - The name of the task.
     */
    openTaskByTaskName(taskName) {
        // Method to open a task by task name
    }

    /**
     * Verifies the title of the page.
     * @param title - The expected title of the page.
     */
    verifyTitlePage(title) {
        // Method to verify the title of the page
    }

    /**
     * Verifies an option in the sidebar menu.
     * @param num - The index of the menu item.
     * @param option - The expected option text.
     */
    verifySidebarMenuOption(num, option) {
        // Method to verify an option in the sidebar menu
    }

    /**
     * Starts a new request by process name.
     * @param processname - The name of the process.
     */
    openNewRequest(processname) {
        // Method to start a new request by process name
    }

    /**
     * Opens a completed request by process name.
     * @param processName - The name of the completed process.
     */
    openRequestByNameForCompletedProcess(processName) {
        // Method to open a completed request by process name
    }

    /**
     * Waits until a text is visible in a component.
     * @param type - The type of selector ("selector" or "xpath").
     * @param selectorXPath - The selector or xpath of the element.
     * @param text - The text that the element should contain.
     * @param maxAttempts - The maximum number of attempts.
     * @param attempts - The current number of attempts.
     */
    waitUntilTextcontainText(type, selectorXPath, text, maxAttempts = 10, attempts = 0) {
        // Method to wait until text contains text
    }

    /**
     * Opens a process in the task page by name and form task name.
     * @param name - The name of the process.
     * @param formTaskName - The name of the form task.
     */
    openProcessInTaskPage(name, formTaskName) {
        // Method to open a process in the task page
    }

    /**
     * Waits until an element is visible.
     * @param type - The type of selector ("selector" or "xpath").
     * @param selectorXPath - The selector or xpath of the element.
     * @param maxAttempts - The maximum number of attempts.
     * @param attempts - The current number of attempts.
     */
    waitUntilElementIsVisible(type, selectorXPath, maxAttempts = 18, attempts = 0) {
        // Method to wait until an element is visible
    }

    /**
     * Opens all completed requests by process name.
     * @param processName - The name of the process.
     */
    openRequestByNameForAllCompletedProcess(processName) {
        // Method to open all completed requests by process name
    }

    /**
     * Opens an in-progress process by process name in the "In Progress" section.
     * @param processName - The name of the process.
     */
    openInPogressProcessInInProgress(processName) {
        // Method to open in-progress process in the "In Progress" section
    }

    /**
     * Opens an in-progress process by process name in the "All Requests" section.
     * @param processName - The name of the process.
     */
    openInPogressProcessInAllRequests(processName) {
        // Method to open in-progress process in the "All Requests" section
    }

    /**
     * Opens all requests by process name.
     * @param processName - The name of the process.
     */
    openAllRequestByName(processName) {
        // Method to open all requests by process name
    }

    /**
     * Waits until the specified number of elements are visible.
     * @param type - The type of selector ("selector" or "xpath").
     * @param selector - The selector or xpath of the elements.
     * @param cant - The number of elements that should be visible.
     * @param maxAttempts - The maximum number of attempts.
     * @param attempts - The current number of attempts.
     */
    waitUntilElementIsVisibleCant(type, selector, cant, maxAttempts = 10, attempts = 0) {
        // Method to wait until the specified number of elements are visible
    }

    /**
     * Searches for a process in all requests using PMQL.
     * @param PMQL - The PMQL query string.
     * @param processName - The name of the process.
     */
    searchProcessInAllRequest(PMQL, processName) {
        // Method to search for a process in all requests using PMQL
    }

    /**
     * Clicks on the Data tab when a request is completed.
     */
    pressDataTab() {
        // Method to click on the Data tab when a request is completed
    }

    /**
     * Starts a new request when the start event has the interstitial activated.
     * @param processname - The name of the process.
     */
    openNewRequestInterstitial(processname) {
        // Method to start a new request with interstitial activated
    }

    /**
     * Clicks on a card in the Cases section.
     * @param cardName - The name of the card ("My Cases", "In Progress", "Completed", "All Cases").
     */
    clickOnMyCasesCard(cardName) {
        // Method to click on a card in the Cases section
    }
}
