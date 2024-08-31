export class Process {

    getId(eventName) {
        // Function to get the ID of a specific event in the process
    }

    async getRecentElementId() {
        // Function to get the ID of the most recent element
    }

    dragEvent(type, offsetX, offsetY) {
        // Function to drag an event of a specific type to a specified location
    }

    dragStartEvent(selector, offsetX, offsetY) {
        // Function to drag a start event to a specified location
    }

    dragEndEvent(selector, offsetX, offsetY) {
        // Function to drag an end event to a specified location
    }

    dragPdfGeneratorEvent(selector, offsetX, offsetY) {
        // Function to drag a PDF generator event to a specified location
    }

    dragdataConnectorEvent(selector, offsetX, offsetY) {
        // Function to drag a data connector event to a specified location
    }

    dragAIGeneratedEvent(selector, offsetX, offsetY) {
        // Function to drag an AI-generated event to a specified location
    }

    dragFlowGenieEvent(selector, offsetX, offsetY) {
        // Function to drag a Flow Genie event to a specified location
    }

    dragRPA(selector, offsetX, offsetY) {
        // Function to drag an RPA event to a specified location
    }

    draggatewayEvent(selector, offsetX, offsetY) {
        // Function to drag a gateway event to a specified location
    }

    dragintermediateEvent(selector, offsetX, offsetY) {
        // Function to drag an intermediate event to a specified location
    }

    dragEventByOffSet(selector, offsetX, offsetY) {
        // Function to drag an event by offset
    }

    clickOnZoomOut() {
        // Function to click on the zoom out button
    }

    connectToEvents(event1Locator, event2Locator) {
        // Function to connect two events in the process
    }

    clickOnSave() {
        // Function to click on the save button
    }

    saveTheProcess(name) {
        // Function to save the process with a specified name
    }

    createProcess(name, description, category = "", username = "") {
        // Function to create a process with a specified name, description, category, and username
    }

    searchForProcess(processName) {
        // Function to search for a process by name
    }

    clickOnSaveInAddProcessModal() {
        // Function to click on the save button in the add process modal
    }

    clickOnAddProcess() {
        // Function to click on the add process button
    }

    enterProcessName(name) {
        // Function to enter the process name
    }

    enterProcessDescription(description) {
        // Function to enter the process description
    }

    enterProcessManager(username) {
        // Function to enter the process manager's username
    }

    enterProcessCategory(category) {
        // Function to enter the process category
    }

    addScreenToFormTask(eventLocator, screenName) {
        // Function to add a screen to a form task
    }

    addDisplayScreenToPDFGenrator(eventLocator, screenName) {
        // Function to add a display screen to a PDF generator event
    }

    addDisplayScreenToManualTask(eventLocator, screenName) {
        // Function to add a display screen to a manual task
    }

    clickOnLoopActivity() {
        // Function to click on the loop activity button
    }

    selectLoopMode(loopMode) {
        // Function to select a loop mode
    }

    enterRequestVarArrayName(selectListName) {
        // Function to enter the request variable array name
    }

    enterLoopIterations(selectListName) {
        // Function to enter the loop iterations
    }

    enterExitCondition(exitConditionName) {
        // Function to enter the exit condition
    }

    addLoopActivity(loopMode, selectListName, exitConditionName) {
        // Function to add a loop activity with specified parameters
    }

    clickOnSettingsTask() {
        // Function to click on the settings task button
    }

    clickOnConfirmChange() {
        // Function to click on the confirm change button
    }

    changeToManualTask() {
        // Function to change a task to a manual task
    }

    changeToTaskForm() {
        // Function to change a task to a task form
    }

    changetoscripttask() {
        // Function to change a task to a script task
    }

    addScreenToscriptTask(eventLocator, screenName) {
        // Function to add a screen to a script task
    }

    addUserToProcessManager(processName) {
        // Function to add a user to the process manager
    }

    selectdataconnector(eventLocator, screenName, listName) {
        // Function to select a data connector for an event
    }

    changetaskname(rename) {
        // Function to change the name of a task
    }

    changeToeventBasedGateway() {
        // Function to change to an event-based gateway
    }

    changeTointermediateSignalCatchEvent() {
        // Function to change to an intermediate signal catch event
    }

    addsignal(eventLocator, signalName) {
        // Function to add a signal to an event
    }

    addassignmentRules(eventLocator, userName) {
        // Function to add assignment rules to an event
    }

    addResponseMapping(source, requestVariable) {
        // Function to add response mapping to an event
    }

    changeToterminateEndEvent() {
        // Function to change to a terminate end event
    }

    changepdfFileName(pdffilename) {
        // Function to change the PDF file name
    }

    verifyPresenceOfProcessAndImportProcess(processName, filePath, parametersMapList = [], password = "0") {
        // Function to verify the presence of a process and import it if necessary
    }

    importProcess(filePath, password = "0") {
        // Function to import a process from a file
    }

    clickOnImportButton() {
        // Function to click on the import button
    }

    goToWebEntry(numWE = 0) {
        // Function to go to a web entry by index
    }

    clickOnWeTabSettign() {
        // Function to click on the web entry tab settings
    }

    openWe() {
        // Function to open the web entry URL
    }

    addassignmentRulesAsSelfService(eventLocator) {
        // Function to add assignment rules as self-service
    }

    changeTosignalStartEvent() {
        // Function to change to a signal start event
    }

    addassignmentRulesAsByUserID(eventLocator, variableName) {
        // Function to add assignment rules by user ID
    }

    async getRecentIdOfLink() {
        // Function to get the most recent ID of a link
    }

    addlineExpression(name, expression) {
        // Function to add a line expression
    }

    changeToInclusiveGateway() {
        // Function to change to an inclusive gateway
    }

    changeToParallelGateway() {
        // Function to change to a parallel gateway
    }

    configureTimingControlOption(type, timeinterval) {
        // Function to configure timing control options
    }

    clickOnWebEntry() {
        // Function to click on the web entry dropdown
    }

    SetWebEntryDetailsForAStartEventWithoutEnablePassword(formScreen, displayScreen) {
        // Function to set web entry details for a start event without enabling a password
    }

    addScreenToScreenAssociatedFieldInWebEntry(screenName) {
        // Function to add a screen to the screen-associated field in the web entry
    }

    addScreenToCompletedActionFieldInWebEntry(screenName) {
        // Function to add a screen to the completed action field in the web entry
    }

    async getURLOfWebEntry() {
        // Function to get the URL of the web entry
    }

    async getProcessIDFromURL() {
        // Function to get the process ID from the URL
    }

    AddABoundaryConditionalEventToTask() {
        // Function to add a boundary conditional event to a task
    }

    setConditionForBoundaryEvent(condition) {
        // Function to set the condition for a boundary event
    }

    getBoundaryId() {
        // Function to get the ID of a boundary event
    }

    addOutBoundConfig(type, property, varValue) {
        // Function to add outbound configuration
    }

    verifyTitlePage(title) {
        // Function to verify the title of a page
    }

    verifySidebarMenuOption(num, option) {
        // Function to verify a sidebar menu option
    }

    saveVersionProcess(version, description) {
        // Function to save a version of the process
    }

    saveProcessWithoutVersion() {
        // Function to save the process without a version
    }

    discardDraft() {
        // Function to discard a draft
    }

    searchProcessAndSelectOptions(processName, option = "config", exportType = "basic", passwordOption = "no", password) {
        // Function to search for a process and select an option
    }

    viewProcess() {
        // Function to view a process
    }

    viewProcessDocumentation() {
        // Function to view process documentation
    }

    editProcess() {
        // Function to edit a process
    }

    editAlternativeProcess() {
        // Function to edit an alternative process
    }

    addProject() {
        // Function to add a project
    }

    archiveProcess() {
        // Function to archive a process
    }

    saveProcessWithoutName() {
        // Function to save the process without a name
    }

    saveProcessWithNameAndDescription(version, description) {
        // Function to save the process with a name and description
    }

    goToConfigProcess() {
        // Function to go to the configuration process
    }

    addProcess() {
        // Function to add a process
    }

    versionHistory() {
        // Function to view the version history
    }

    showVersioningOnly() {
        // Function to show only named versions
    }

    verifyVersioningWithoutNameNotAppear() {
        // Function to verify that versioning without a name does not appear
    }

    checkSavedAllVersions() {
        // Function to check that all versions have been saved
    }

    checkCopyToLatest() {
        // Function to check the copy to the latest version
    }

    configDataConnector(connectorName, methodName, myTimeW = 10000) {
        // Function to configure a data connector
    }

    configProcessImported(parametersMapList) {
        // Function to configure an imported process
    }

    configRowProcess(key, value, firstName, lastName, elemName) {
        // Function to configure a row in the process
    }

    configRowSatusProcess(key, state) {
        // Function to configure the status of a row in the process
    }

    saveChangesConfigProcess() {
        // Function to save changes to the process configuration
    }

    verifyConfigOfDataConnectorAndConfig(elementName, dataConnectorName, resource) {
        // Function to verify and configure a data connector in the process modeler
    }

    verifyConfigOfStartEventAndConfig(elementName, permissionObject) {
        // Function to verify and configure a start event in the process modeler
    }

    changepdfFileNameToDynamicVariable(input) {
        // Function to change the PDF file name to a dynamic variable
    }

    changeToSignalEndEvent() {
        // Function to change to a signal end event
    }

    addSignalToStartEventOrEndEvent(name) {
        // Function to add a signal to a start event or end event
    }

    changeToSignalStartEvent() {
        // Function to change to a signal start event
    }

    clickOnFormTaskComments() {
        // Function to click on the form task comments button
    }

    enableTheComments() {
        // Function to enable comments on a form task
    }

    enableTheReactions() {
        // Function to enable reactions on a form task
    }

    enableTheVoting() {
        // Function to enable voting on a form task
    }

    enableTheEdit() {
        // Function to enable editing on a form task
    }

    enableTheDelete() {
        // Function to enable deleting on a form task
    }

    createProcessWithBPMNFile(nameProcess, descriptionProcess, category, path) {
        // Function to create a process using a BPMN file
    }

    verifyNameProcess(nameProcess) {
        // Function to verify the name of the process
    }

    downloadProcess(processName, exportType = "basic", passwordOption = "no", password) {
        // Function to download a process
    }

    verifyProcessInDownloadsFolder(path, nameProcess) {
        // Function to verify the process in the downloads folder
    }

    verifyProcessInDownloadsFolderJSON(path, nameProcess) {
        // Function to verify the process in the downloads folder as a JSON
    }

    openScreenofElementFromModeler(typeName, elementName, defaultAlternative = "A") {
        // Function to open the screen of an element from the modeler
    }

    verifyProcessManagerAndAddItifNecessary(processName, processManager = "admin", fullNameManager = "Admin User") {
        // Function to verify the process manager and add it if necessary
    }

    verifyConfigOfSubProcessAndConfig(elementName, subProcessName, startEventName) {
        // Function to verify and configure a sub-process in the process modeler
    }

    verifyConfigOfTaskResourceAndConfig(elementName, resource, type) {
        // Function to verify and configure a task resource in the process modeler
    }

    addScreenToEndEvent(name) {
        // Function to add a screen to an end event
    }

    clickOnMsgEndEvent() {
        // Function to click on a message end event
    }

    clickOnMsgStartEvent() {
        // Function to click on a message start event
    }

    setMsgReferenceToMsgStartEvent() {
        // Function to set a message reference to a message start event
    }

    saveTheProcessWithoutUser() {
        // Function to save the process without a user
    }

    createVocabularies(name, description) {
        // Function to create vocabularies
    }

    addvacabulary(name) {
        // Function to add a vocabulary
    }

    verifyConfigOfSendEmailAndConfig(nameSendEmail, setupSendEmail) {
        // Function to verify and configure a send email task in the process modeler
    }

    configRecipientSendEmail(recipient, value) {
        // Function to configure the recipient of a send email task
    }

    validateAndConfigEmailNotification(nameSendEmail = null, setupSendEmail) {
        // Function to validate and configure email notifications
    }

    actionEmailNotification(nroNotification = 0, action = 'edit') {
        // Function to perform an action on an email notification
    }

    saveOrNotEmailNotification(option) {
        // Function to save or cancel an email notification
    }

    configRecipientEmailNotification(recipient, value) {
        // Function to configure the recipient of an email notification
    }

    verifyConfigOfSignalEndEvent(signalEvent, signal) {
        // Function to verify and configure a signal end event
    }

    verifyConfigOfSignalStartEvent(signalEvent, signal) {
        // Function to verify and configure a signal start event
    }

    verifyConfigOfTaskAndConfig(elementName, assignmentType, userGroup, nameFullUser = "") {
        // Function to verify and configure a task in the process modeler
    }

    verifyConfigOfSignalIntermediateEvent(signalEvent, signal) {
        // Function to verify and configure a signal intermediate event
    }

    addPropertyInVocabulary(numRow, nameProperty, type, lengthOrInherit, required) {
        // Function to add a property in a vocabulary
    }

    editOrDeleteVocabulary(vocabularyName, option = 'edit') {
        // Function to edit or delete a vocabulary
    }

    searchVocabulary(vocabularyName) {
        // Function to search for a vocabulary
    }

    editVocabulary() {
        // Function to edit a vocabulary
    }

    createVocabulary(vocabularyName, description) {
        // Function to create a vocabulary
    }

    verifyPresenceOfVocabulary(vocabularyName, description, data) {
        // Function to verify the presence of a vocabulary
    }

    verifyPresenceOfVocabularyAssignedInModeler(elementName, elementXpath, vocabularyName) {
        // Function to verify that a vocabulary is assigned to a task in the process modeler
    }

    assignedVocabulary(vocabularyName) {
        // Function to assign a vocabulary to a task in the process modeler
    }

    selectMenuOptionRow(nameOption) {
        // Function to select a menu option for a row in the process list
    }

    pressInspectorBtn() {
        // Function to press the inspector button to open the inspector panel
    }

    pressCloseInspectorPanel() {
        // Function to close the inspector panel
    }

    publishTemplate(templateName, Description, version) {
        // Function to publish a template with a specified name, description, and version
    }

    searchTemplate(templateName) {
        // Function to search for a template by name
    }

    openScreenEmailNotificationofElementFromModeler(typeName, elementName) {
        // Function to open the screen email of an email notification from the process modeler
    }

    goToWebEntryByStartEvent(startEventName) {
        // Function to go to a web entry by start event name
    }

    createNewProcessWithTemplate(nameTemplate, processName, description = '', category = "", username = "") {
        // Function to create a new process using a template
    }

    importProcessAPI(path, mode = 'copy') {
        // Function to import a process using the API
    }

    configureProcessAPI(processId, config) {
        // Function to configure a process using the API
    }

    modifyBpmnAPI(processId, callback) {
        // Function to modify the BPMN of a process using the API
    }

    startProcessAPI(processId, nodeId, data = {}) {
        // Function to start a process using the API
    }

    searchArchiveProcess(processName, option) {
        // Function to search for an archived process and select an option
    }

    restoreProcess() {
        // Function to restore an archived process
    }

    createCategory(name, status) {
        // Function to create a new category
    }

    clickOnNewCategory() {
        // Function to click on the new category button
    }

    deleteCategory(name) {
        // Function to delete a category by name
    }

    searchForProcessAndClickinEllipsisMenu(processName) {
        // Function to search for a process and click on the ellipsis menu
    }

    goToWebEntryAndSelectOption() {
        // Function to go to a web entry and select an option
    }

    copyWebEntryURL() {
        // Function to copy the web entry URL
    }

    openInspectorModeler() {
        // Function to open the inspector in the process modeler
    }

    openAlternativeModeler(alternative = "A") {
        // Function to open an alternative modeler view
    }

    verifyPresenceOfProcessAndCreate(processName, description) {
        // Function to verify the presence of a process and create it if necessary
    }

}
