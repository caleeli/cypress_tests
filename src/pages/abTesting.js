export class ABTesting {
    /**
     * Enables Alternative B in AB testing if it is not already enabled.
     */
    enableAlternativeB() {}

    /**
     * Clicks the plus button in the AB testing interface.
     */
    clickOnPlusBtn() {}

    /**
     * Confirms the enablement of an AB testing alternative.
     */
    clickOnConfirmEnableBtn() {}

    /**
     * Confirms the deletion of an AB testing alternative.
     */
    clickOnConfirmDeleteBtn() {}

    /**
     * Replaces the data of Alternative A with that of Alternative B.
     * @param {string} iframeOption - Specifies which iframe to interact with.
     */
    replaceAlternativeAWithDataOfAlternativeB(iframeOption) {}

    /**
     * Replaces the data of Alternative B with that of Alternative A.
     * @param {string} iframeOption - Specifies which iframe to interact with.
     */
    replaceAlternativeBWithDataOfAlternativeA(iframeOption) {}

    /**
     * Confirms the replacement of an AB testing alternative.
     * @param {string} iframeOption - Specifies which iframe to interact with.
     */
    confirmReplaceAlternative(iframeOption = 'a') {}

    /**
     * Clicks on Alternative A tab.
     * @param {string} iframeOption - Specifies which iframe to interact with.
     */
    clickOnAlternativeA(iframeOption = 'a') {}

    /**
     * Clicks on Alternative B tab.
     * @param {string} iframeOption - Specifies which iframe to interact with.
     */
    clickOnAlternativeB(iframeOption = 'a') {}

    /**
     * Clicks on the replace alternative button.
     * @param {string} iframeOption - Specifies which iframe to interact with.
     */
    clickOnReplaceAlternative(iframeOption = 'a') {}

    /**
     * Deletes Alternative B if it exists.
     */
    deleteAlternativeB() {}

    /**
     * Deletes Alternative B if it exists in the current AB testing setup.
     */
    deleteAlternativeB_ifExist() {}

    /**
     * Clicks on the inspector button in the AB testing interface.
     * @param {string} iframeOption - Specifies which iframe to interact with.
     */
    clickOnInspectorBtn(iframeOption = 'a') {}

    /**
     * Publishes a new version of the AB testing configuration.
     * @param {string} option - Specifies the publish option (e.g., with or without AB).
     * @param {string} iframeOption - Specifies which iframe to interact with.
     * @param {string} alternative - Specifies which alternative to select.
     * @param {string} version - Specifies the version to publish.
     * @param {string} description - Provides a description for the version.
     */
    publishNewVersion(option, iframeOption, alternative, version, description) {}

    /**
     * Checks for an alert in the AB testing interface.
     * @param {string} iframeOption - Specifies which iframe to interact with.
     */
    alert(iframeOption = 'a') {}

    /**
     * Clicks on the publish button in the AB testing interface.
     * @param {string} iframeOption - Specifies which iframe to interact with.
     */
    clickOnPublishBtn(iframeOption = 'a') {}

    /**
     * Saves the current launchpad modal settings.
     * @param {string} iframeOption - Specifies which iframe to interact with.
     */
    saveLaunchPadModal(iframeOption = 'a') {}

    /**
     * Selects Alternative A in the AB testing interface.
     * @param {string} iframeOption - Specifies which iframe to interact with.
     */
    selectAlternativeA(iframeOption = 'a') {}

    /**
     * Selects Alternative B in the AB testing interface.
     * @param {string} iframeOption - Specifies which iframe to interact with.
     */
    selectAlternativeB(iframeOption = 'a') {}

    /**
     * Selects both Alternative A and B in the AB testing interface.
     * @param {string} iframeOption - Specifies which iframe to interact with.
     */
    selectAlternativeAB(iframeOption = 'a') {}

    /**
     * Clicks the publish button within the modal in the AB testing interface.
     * @param {string} iframeOption - Specifies which iframe to interact with.
     */
    clickOnPublishBtnInModal(iframeOption = 'a') {}

    /**
     * Clicks on the save and publish button in the AB testing interface.
     * @param {string} iframeOption - Specifies which iframe to interact with.
     */
    clickOnSaveAndPublish(iframeOption = 'a') {}

    /**
     * Selects an alternative in the AB testing interface based on the provided option.
     * @param {string} alternative - Specifies the alternative to select.
     * @param {string} iframeOption - Specifies which iframe to interact with.
     */
    selectAlternative(alternative, iframeOption) {}

    /**
     * Fills in the version field in the AB testing interface.
     * @param {string} version - The version text to input.
     */
    fillVersion(version) {}

    /**
     * Fills in the description field in the AB testing interface.
     * @param {string} description - The description text to input.
     */
    fillDescription(description) {}

    /**
     * Selects either a simple or advanced configuration in the AB testing interface.
     * @param {string} option - Specifies whether to select simple or advanced.
     * @param {string} expression - The expression for the advanced option.
     * @param {string} iframeOption - Specifies which iframe to interact with.
     */
    selectSimpleOrAdvanced(option, expression, iframeOption) {}

    /**
     * Configures AB testing settings from the modeler.
     * @param {string} option - Specifies the type of configuration (simple or advanced).
     * @param {string} expression - The expression for the advanced option.
     * @param {string} iframeOption - Specifies which iframe to interact with.
     */
    configureABsettingsFromModeler(option, expression, iframeOption) {}

    /**
     * Clicks on the AB settings button in the AB testing interface.
     * @param {string} iframeOption - Specifies which iframe to interact with.
     */
    clickOnAbSettings(iframeOption = 'a') {}

    /**
     * Moves the scrollbar in the AB testing interface.
     * @param {string} iframeOption - Specifies which iframe to interact with.
     */
    moveScrollbar(iframeOption = 'a') {}

    /**
     * Clicks on the advanced button in the AB testing interface.
     * @param {string} iframeOption - Specifies which iframe to interact with.
     */
    clickOnAdvanced(iframeOption = 'a') {}

    /**
     * Fills in an expression in the AB testing interface.
     * @param {string} expression - The expression to input.
     * @param {string} iframeOption - Specifies which iframe to interact with.
     */
    fillExpression(expression, iframeOption = 'a') {}

    /**
     * Navigates to the AB testing configuration in the process settings.
     */
    goToseeProcessABTestingConfiguration() {}

    /**
     * Configures AB testing settings from the process configuration.
     * @param {string} processName - The name of the process to configure.
     * @param {string} option - Specifies the type of configuration (simple or advanced).
     * @param {string} expression - The expression for the advanced option.
     */
    configureABsettingsFromProcessConfiguration(processName, option, expression) {}

    /**
     * Clicks on the AB testing configuration tab in the process settings.
     */
    clickOnABTestingConfigurationTab() {}

    /**
     * Clicks on the add button in the modeler interface.
     */
    clickOnAddBtn() {}

    /**
     * Drags and drops an element onto the paper in the modeler interface.
     */
    dragAndDropElementToPaper() {}

    /**
     * Drags an element in the modeler interface.
     */
    dragElement() {}

    /**
     * Waits until a specific element is visible in the iframe.
     * @param {string} type - The type of selector to wait for.
     * @param {string} selectorXPath - The XPath or selector to wait for.
     * @param {number} maxAttempts - Maximum number of attempts before timing out.
     * @param {number} attempts - Current attempt count.
     */
    waitUntilElementIsVisible(type, selectorXPath, maxAttempts = 10, attempts = 0) {}

    /**
     * Closes the modal in the AB testing interface.
     * @param {string} iframeOption - Specifies which iframe to interact with.
     */
    closeModal(iframeOption = 'a') {}

    /**
     * Clicks on a start event in the modeler interface.
     * @param {string} nameElement - The name of the start event.
     * @param {string} iframeOption - Specifies which iframe to interact with.
     */
    clickOnStartEvent(nameElement, iframeOption = 'a') {}

    /**
     * Clicks on a task in the modeler interface.
     * @param {string} nameElement - The name of the task.
     * @param {string} iframeOption - Specifies which iframe to interact with.
     */
    clickOnTask(nameElement, iframeOption = 'a') {}

    /**
     * Clicks on an end event in the modeler interface.
     * @param {string} nameElement - The name of the end event.
     * @param {string} iframeOption - Specifies which iframe to interact with.
     */
    clickOnEndEvent(nameElement, iframeOption = 'a') {}

    /**
     * Deletes an element in the modeler interface.
     * @param {string} iframeOption - Specifies which iframe to interact with.
     */
    deleteElement(iframeOption = 'a') {}

    /**
     * Discards unsaved changes in the modeler interface.
     * @param {string} iframeOption - Specifies which iframe to interact with.
     */
    discardChanges(iframeOption = 'a') {}

    /**
     * Changes the name of the current process.
     * @param {string} newName - The new name for the process.
     */
    changeNameOfProcess(newName) {}

    /**
     * Pauses the execution for a brief period to allow loading.
     */
    load() {}

    /**
     * Opens a web entry in AB testing.
     * @param {string} iframeOption - Specifies which iframe to interact with.
     */
    openWebEntryinABtesting(iframeOption = 'a') {}

    /**
     * Renames a start event in the modeler interface.
     * @param {string} nameElement - The current name of the start event.
     * @param {string} newName - The new name for the start event.
     * @param {string} iframeOption - Specifies which iframe to interact with.
     */
    renameStartEventName(nameElement, newName, iframeOption = 'a') {}

    /**
     * Renames a task in the modeler interface based on the task type.
     * @param {string} nameElement - The current name of the task.
     * @param {string} newName - The new name for the task.
     * @param {string} taskType - The type of the task (e.g., Form, Manual).
     * @param {string} iframeOption - Specifies which iframe to interact with.
     */
    remaneTaskName(nameElement, newName, taskType, iframeOption = 'a') {}

    /**
     * Scrolls to the end page in the summary view.
     */
    goToEndPage() {}

    /**
     * Configures assignment rules for a task in the process modeler.
     * @param {object} assignmentConfig - The configuration object for assignment rules.
     * @param {string} iframeOption - Specifies which iframe to interact with.
     */
    configureAssignmentRulesInTask(assignmentConfig, iframeOption = 'a') {}

    /**
     * Clicks on the assignment rules accordion in the modeler interface.
     * @param {string} iframeOption - Specifies which iframe to interact with.
     */
    clickOnAssignmentRules(iframeOption = 'a') {}

    /**
     * Selects a user or group in the assignment rules configuration.
     * @param {string} label - The label of the selection field.
     * @param {string} userGroup - The user or group to select.
     * @param {string} iframeOption - Specifies which iframe to interact with.
     */
    selectUserOrGroup(label, userGroup, iframeOption = 'a') {}

    /**
     * Fills in a process variable in the assignment rules configuration.
     * @param {string} variableName - The name of the process variable.
     * @param {string} value - The value to input for the process variable.
     * @param {string} iframeOption - Specifies which iframe to interact with.
     */
    fillProcessVariable(variableName, value, iframeOption = 'a') {}
}
