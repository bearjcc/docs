export const LAYERS = {
  "plugin-entry": [
    {
      "name": "AssemblyInfo.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Properties/AssemblyInfo.cs",
      "summary": "Assembly metadata for the Autex Toolkit DriveWorks plugin including version, company, and product information."
    },
    {
      "name": "Autex Toolkit.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Plugin/ToolkitPlugin.cs",
      "summary": "Main DriveWorks Administrator plugin entry point (AutexToolkitPlugin) implementing IApplicationPlugin. Registers the Autex Tools command group, manages Form Designer WebView2 integration, context menu injection, and script tool window lifecycle."
    },
    {
      "name": "AutexToolkitPlugin.FormDesignerIntegrationProbe.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Plugin/ToolkitPlugin.FormDesignerIntegrationProbe.cs",
      "summary": "Partial class of AutexToolkitPlugin implementing Form Designer WebView2 resolution probe for diagnostics, triggered by Dev scripts or environment variable to inspect and log WebView2 integration state."
    },
    {
      "name": "AutexToolsPresenter.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Presentation/ToolsPresenter.cs",
      "summary": "Presenter wiring the script registry to the Autex Tools UI. Handles Run/Abort/Undo/Save Report/Export CSV/Refresh Cache lifecycle, with group-mode project looping and merged result tables."
    },
    {
      "name": "DriveWorksInterface.Cache.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Infrastructure/DriveWorks/DriveWorksInterface.Cache.cs",
      "summary": "Partial class of DriveWorksInterface handling cache operations. Manages project data caching with timestamp-based invalidation."
    },
    {
      "name": "DriveWorksInterface.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Infrastructure/DriveWorks/DriveWorksInterface.cs",
      "summary": "Central singleton for DriveWorks SDK interaction. Manages application lifecycle, mode detection (None/GroupOnly/ProjectOpen), event subscriptions, and the Helpers instance."
    },
    {
      "name": "DriveWorksInterface.FormFont.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Infrastructure/DriveWorks/DriveWorksInterface.FormFont.cs",
      "summary": "Partial class of DriveWorksInterface handling form font discovery and resolution. Maps DriveWorks font values to WPF font families."
    },
    {
      "name": "DriveWorksInterface.ScriptHelpers.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Infrastructure/DriveWorks/ScriptHelpers/ScriptHelpers.cs",
      "summary": "Massive partial class (9000+ lines) implementing IAutexScriptHelpers and IGroupDataProvider. The primary SDK boundary providing all script-facing operations: project data, CRUD, rule analysis, document creation, form control manipulation, and spell checking."
    },
    {
      "name": "DriveWorksInterface.ScriptHelpers.DocumentsAndRulesGapFill.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/DriveWorksInterface.ScriptHelpers.DocumentsAndRulesGapFill.cs",
      "summary": "Partial class of DriveWorksScriptHelpers handling gap-fill logic for documents and rules when reading from DriveProjx archives where evaluated values are unavailable."
    },
    {
      "name": "DriveWorksInterface.ScriptHelpers.DocumentsCrudAndCrrud.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/DriveWorksInterface.ScriptHelpers.DocumentsCrudAndCrrud.cs",
      "summary": "Partial class of DriveWorksScriptHelpers implementing CRUD and CRRUD operations for documents, data documents, and 3D documents via the DriveWorks SDK."
    },
    {
      "name": "DriveWorksInterface.ScriptHelpers.GroupAndSecurity.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/DriveWorksInterface.ScriptHelpers.GroupAndSecurity.cs",
      "summary": "Partial class of DriveWorksScriptHelpers handling group-level operations: group data, security, teams, users, and DriveApp management."
    },
    {
      "name": "DriveWorksInterface.ScriptHelpers.ProjectFetchAndCalcTables.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/DriveWorksInterface.ScriptHelpers.ProjectFetchAndCalcTables.cs",
      "summary": "Partial class of DriveWorksScriptHelpers for fetching project data and managing calc tables via the DriveWorks SDK."
    },
    {
      "name": "DriveWorksInterface.ScriptHelpers.ProjectSettingsAndForms.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/DriveWorksInterface.ScriptHelpers.ProjectSettingsAndForms.cs",
      "summary": "Partial class of DriveWorksScriptHelpers for project settings, forms, and form control operations including property capture/apply and position management."
    },
    {
      "name": "DriveWorksInterface.ScriptHelpers.RuleAnalysis.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Infrastructure/DriveWorks/ScriptHelpers/ScriptHelpers.RuleAnalysis.cs",
      "summary": "Partial class of DriveWorksScriptHelpers for rule analysis: parse error detection, function call site extraction, named item resolution, and rule formula application."
    },
    {
      "name": "DriveWorksInterface.ScriptHelpers.SpecMacrosAndCreation.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/DriveWorksInterface.ScriptHelpers.SpecMacrosAndCreation.cs",
      "summary": "Partial class of DriveWorksScriptHelpers for specification macro operations and project/item creation workflows via the DriveWorks SDK."
    },
    {
      "name": "FormControlTypeConversion.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Forms/FormControlTypeConversion.cs",
      "summary": "Defines form control type conversion rules and mappings. Specifies which control types can be converted to which other types."
    }
  ],
  "core-services": [
    {
      "name": "AssemblyResolveModuleInit.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Scripts/AssemblyResolveModuleInit.cs",
      "summary": "Module initializer for assembly resolve event handling, ensuring dependent assemblies load correctly in the DriveWorks plugin host process."
    },
    {
      "name": "AutexScript.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Scripts/AutexScript.cs",
      "summary": "Abstract base class for all Autex Toolkit scripts defining execution context (project/group/no-connection), icon, group-mode looping, input specs, and apply-selected handling."
    },
    {
      "name": "AutexScriptContext.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Scripts/AutexScriptContext.cs",
      "summary": "Concrete implementation of IAutexScriptContext providing script execution context with DriveWorks SDK access, result display methods, cancellation, and mutation control."
    },
    {
      "name": "AutexScriptContextMutationsExtensions.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Scripts/AutexScriptContextMutationsExtensions.cs",
      "summary": "Extension method EnsureMutationsAllowed that guards write operations by throwing when the script context does not permit mutations."
    },
    {
      "name": "AutexScriptRegistry.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Scripts/AutexScriptRegistry.cs",
      "summary": "Static registry that discovers and instantiates all available AutexScript implementations via reflection, providing the script catalog to the presenter and browser."
    },
    {
      "name": "AutexToolkitDuplicateAssemblyGuard.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/AutexToolkitDuplicateAssemblyGuard.cs",
      "summary": "Guard that detects and logs duplicate Autex Toolkit assembly loads, preventing multiple plugin initializations from conflicting in the DriveWorks host process."
    },
    {
      "name": "AutexToolkitExtenderAssemblyGate.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Scripts/AutexToolkitExtenderAssemblyGate.cs",
      "summary": "Assembly gate that manages the AutexCustom extender assembly load context, ensuring the correct version is loaded for project extender UDFs."
    },
    {
      "name": "AutexToolkitProjectExtenderDiagnostics.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Scripts/AutexToolkitProjectExtenderDiagnostics.cs",
      "summary": "Diagnostics helper for the Autex Toolkit shared project extender, logging UDF registration status, function categories, and assembly resolution details."
    },
    {
      "name": "AutexToolkitSharedProjectExtender.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Scripts/AutexToolkitSharedProjectExtender.cs",
      "summary": "DriveWorks SharedProjectExtender registering all Autex Toolkit UDFs (group constants lookup, spelling check/suggest/if-error) with duplicate-instance tracking and project lifecycle management."
    },
    {
      "name": "AutexToolsViewEventArgs.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/ScriptUi/AutexToolsViewEventArgs.cs",
      "summary": "Event argument classes for the Autex Tools view layer: RunRequested, SaveReportRequested, ExportCsvRequested, RefreshCacheRequested, and ContinueWithSelectedRequested."
    },
    {
      "name": "BaseAutexScript.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Scripts/BaseAutexScript.cs",
      "summary": "Abstract base providing Id, DisplayName, Description, RequiresOpenProject, GetInputSpecs, and GetToolbarSpecs for Autex scripts."
    },
    {
      "name": "CacheEntry.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Cache/CacheEntry.cs",
      "summary": "Value type recording a cached item's value, load timestamp, and load duration in milliseconds."
    },
    {
      "name": "CacheKey.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Cache/CacheKey.cs",
      "summary": "Cache key structure combining group path, project name, and optional scope tag for the group/project data cache."
    },
    {
      "name": "CacheStore.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Cache/CacheStore.cs",
      "summary": "Concurrent cache store providing TryGet/Set/Clear operations with group-scoped and project-scoped invalidation support."
    },
    {
      "name": "CalcTableDiffSummarizer.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/DiffSummarizers/CalcTableDiffSummarizer.cs",
      "summary": "Summarizes calc table diff pairs into human-readable change descriptions for the comparison report."
    },
    {
      "name": "CancellableScriptContext.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Scripts/CancellableScriptContext.cs",
      "summary": "Decorator wrapping IAutexScriptContext to inject cancellation checks and nested dispatcher pumping at host boundaries without requiring explicit Yield calls from scripts."
    },
    {
      "name": "ChangeCounts.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Comparison/ChangeCounts.cs",
      "summary": "Value type tracking counts of added, removed, renamed, modified, and moved changes with aggregation support."
    },
    {
      "name": "ChangeTreeBuilder.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Comparison/ChangeTreeBuilder.cs",
      "summary": "Builds a hierarchical ChangeTreeModel from ProjectComparisonResult, organizing settings, constants, variables, forms, form controls, documents, and other sections into a tree with change kind annotations."
    },
    {
      "name": "ChangeTreeModel.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Comparison/ChangeTreeModel.cs",
      "summary": "Root model holding the change tree root node, totals summary, and flat detail list for the comparison report."
    },
    {
      "name": "ChangeTreeNode.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Comparison/ChangeTreeNode.cs",
      "summary": "Tree node representing a comparison section or leaf with label, change kind, filter type, counts, and children."
    },
    {
      "name": "CheckboxListSelectionInputs.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Scripts/CheckboxListSelectionInputs.cs",
      "summary": "Helper for building checkbox-list input specifications with parse/encode/normalize operations for multi-select script inputs."
    },
    {
      "name": "CompareRuleHighlighter.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Comparison/CompareRuleHighlighter.cs",
      "summary": "Generates highlighted HTML for rule comparison with inline diff markers showing additions and deletions between two rule texts."
    },
    {
      "name": "ComparisonReportModelBuilder.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Comparison/ComparisonReportModelBuilder.cs",
      "summary": "Projects ProjectComparisonResult into Scriban-friendly dictionaries for the UI3 comparison report, supporting single and combined modes with tree node limits and cell truncation."
    },
    {
      "name": "ComparisonScope.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Comparison/ComparisonScope.cs",
      "summary": "Enum defining comparison scope levels (e.g. project vs group) for the comparison session."
    },
    {
      "name": "ComparisonSession.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Comparison/ComparisonSession.cs",
      "summary": "Holds two comparison sides (newer/older), data sources, options, and lazily computed comparison result with caching."
    },
    {
      "name": "ComparisonSessionBuilder.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Comparison/ComparisonSessionBuilder.cs",
      "summary": "Factory building ComparisonSession instances from the Compare Projects script parameters and revision descriptors."
    },
    {
      "name": "ConnectionEdgeKind.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/CrossProject/ConnectionEdgeKind.cs",
      "summary": "Enum defining kinds of cross-project connection edges (macro reference, rule reference, hosted project link)."
    },
    {
      "name": "ConstantsTypedComparer.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Comparison/TypedComparers/ConstantsTypedComparer.cs",
      "summary": "Typed comparer for project constants, producing item diffs for added/removed/modified/renamed constants."
    },
    {
      "name": "CrudApiTestConstants.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Testing/CrudApiTestConstants.cs",
      "summary": "Constants for CRUD API test scripts including name prefixes, form message codes, and document type identifiers."
    },
    {
      "name": "CrudOp.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Scripts/CrudOp.cs",
      "summary": "Enum defining CRUD operation types (Create, Read, Update, Delete) used in test and data management scripts."
    },
    {
      "name": "CrudResult.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Scripts/CrudResult.cs",
      "summary": "Value type representing a CRUD operation result with success status, item name, and error message."
    },
    {
      "name": "CurrentView.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/ScriptUi/CurrentView.cs",
      "summary": "Unified view over the current project or group context, building list-data tables with filters from the DriveWorks SDK for script consumption."
    },
    {
      "name": "CutEstimateProfileTableCatalog.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Catalogs/CutEstimateProfileTableCatalog.cs",
      "summary": "Catalog for cut estimate profile tables providing header-based row lookup, profile table data building, and simple table construction."
    },
    {
      "name": "DescriptionMarkdownToRtf.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Scripts/DescriptionMarkdownToRtf.cs",
      "summary": "Converts description text from Markdown to RTF format for display in WPF RichTextBox controls."
    },
    {
      "name": "DiagnosticResultTableHelper.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Engines/DiagnosticResultTableHelper.cs",
      "summary": "Helper for building diagnostic result DataTables with predefined column layouts for status, name, reason, section, location, and rule-based diagnostics."
    },
    {
      "name": "DisplayTableColumnOrder.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Scripts/DisplayTableColumnOrder.cs",
      "summary": "Defines column ordering rules for display tables, applying custom sort order and removing category depth columns when present."
    },
    {
      "name": "DocumentCreationSupport.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Documents/DocumentCreationSupport.cs",
      "summary": "Document type metadata and resolution for creation, providing type options (simple, data, 3D), master file requirements, and 3D document initialization helpers."
    },
    {
      "name": "DriveProjectLockFile.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Archive/DriveProjectLockFile.cs",
      "summary": "Detects and reads DriveWorks project peer lock files, providing lock holder information for concurrent access management."
    },
    {
      "name": "DriveProjxArchiveLayout.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Archive/DriveProjxArchiveLayout.cs",
      "summary": "Defines the .driveprojx ZIP archive layout with well-known entry paths (designMaster.xml, project.xml) and entry listing helpers."
    },
    {
      "name": "DriveProjXFileReader.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Archive/DriveProjXFileReader.cs",
      "summary": "Builds ProjectData from a .driveprojx ZIP archive without opening the project in DriveWorks, reading designMaster.xml and project.xml to populate constants, variables, tables, documents, forms, and specification properties."
    },
    {
      "name": "DriveProjXFormXmlParser.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Archive/DriveProjXFormXmlParser.cs",
      "summary": "Parses form XML fragments from .driveprojx archives into FormControlData transfer objects with property capture."
    },
    {
      "name": "DriveProjXProjectXmlParser.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Archive/DriveProjXProjectXmlParser.cs",
      "summary": "Parses preprocessed driveProj/project.xml into structured lists (settings, constants, variables, tables, documents, macros) for ProjectData construction from archive sources."
    },
    {
      "name": "DriveWorksAssemblyCompatibility.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/DriveWorks/DriveWorksAssemblyCompatibility.cs",
      "summary": "Assembly resolve handler that redirects DriveWorks and WebView2 DLL loads to the correct install directory, handling version mismatches between build-time references and the running host."
    },
    {
      "name": "DriveWorksFontDiscovery.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/DriveWorks/DriveWorksFontDiscovery.cs",
      "summary": "Discovers available font families from the system and DriveWorks install, providing font family lists with style information for form control font property handling."
    },
    {
      "name": "DriveWorksFontValue.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/DriveWorks/DriveWorksFontValue.cs",
      "summary": "Value type representing a DriveWorks font specification (family, size, bold, italic, underline, strikethrough) with parse and format methods."
    },
    {
      "name": "DriveWorksRenameableNamePolicy.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/DriveWorks/DriveWorksRenameableNamePolicy.cs",
      "summary": "Policy for validating and formatting DriveWorks renameable names, handling Pascal case, interior spaces, dictionary hints, and rename validation."
    },
    {
      "name": "DriveWorksRuleParsing.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Rules/DriveWorksRuleParsing.cs",
      "summary": "Helper for parsing DriveWorks rule text, detecting formula-like expressions and extracting rule structure."
    },
    {
      "name": "FindReplaceReadOnlyPreview.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Engines/FindReplaceReadOnlyPreview.cs",
      "summary": "Builds a read-only preview table for find-and-replace operations from ProjectData, showing proposed changes before apply."
    },
    {
      "name": "FlowPropertyDataFactory.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Forms/FlowPropertyDataFactory.cs",
      "summary": "Factory methods for creating static and dynamic FlowProperty data instances used in specification flow property mapping."
    },
    {
      "name": "FlowPropertyFromArchiveXml.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Forms/FlowPropertyFromArchiveXml.cs",
      "summary": "Parses Specification Flow / macro Property XML from .driveprojx archives into SpecificationMacroTaskPropertyInfo using the same slot semantics as FlowRuledProperty."
    },
    {
      "name": "FlowRuledProperty.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Forms/FlowRuledProperty.cs",
      "summary": "Defines FlowPropertyMode (Static/Dynamic/Connected) and provides mapping from DriveWorks SDK FlowProperty to the Toolkit's ruled property model for specification flow tasks."
    },
    {
      "name": "FormControlComparer.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Comparison/FormControlComparer.cs",
      "summary": "Compares form control properties between two project snapshots, producing filtered property diffs with known-limitation tagging."
    },
    {
      "name": "FormControlConversionAnalysis.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Forms/FormControlConversionAnalysis.cs",
      "summary": "Analyzes form control property conversion compatibility between source and target control types, reporting supported and unsupported property mappings."
    },
    {
      "name": "FormControlCreation.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Forms/FormControlCreation.cs",
      "summary": "Result type for form control creation operations carrying success status, message, and the created control reference."
    },
    {
      "name": "FormControlDeepCopy.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Forms/FormControlDeepCopy.cs",
      "summary": "Deep copy model for form control properties, capturing property name, category, value, rule, and rule-driven status for clipboard and duplication operations."
    },
    {
      "name": "FormControlListExtensions.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Forms/FormControlListExtensions.cs",
      "summary": "Extension method filtering form control lists by control type for list-data scripts."
    },
    {
      "name": "FormControlMoveDetector.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Comparison/FormControlMoveDetector.cs",
      "summary": "Detects form controls that have been moved (renamed or repositioned) between two project snapshots, applying move annotations to the diff result."
    },
    {
      "name": "FormControlPairComparisonReport.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Forms/FormControlPairComparisonReport.cs",
      "summary": "Generates pair comparison reports for form control type conversions, producing HTML documents, DataTables, CSV exports, and property matrix views with semantic and partial property pairings."
    },
    {
      "name": "FormControlPathHelper.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Comparison/FormControlPathHelper.cs",
      "summary": "Helper for parsing and formatting form control display paths (form > tab > control) in the comparison tree."
    },
    {
      "name": "FormControlPropertyCapture.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Forms/FormControlPropertyCapture.cs",
      "summary": "Value type capturing a form control property's value, rule, comment, and rule-driven status for snapshot and comparison."
    },
    {
      "name": "FormControlPropertyRuleSupport.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Forms/FormControlPropertyRuleSupport.cs",
      "summary": "Enum defining rule support levels for form control properties (None, Optional, Required) used in property transfer validation."
    },
    {
      "name": "FormControlPropertyTransfer.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Forms/FormControlPropertyTransfer.cs",
      "summary": "Handles property transfer between form controls, resolving alias mappings and validating target property acceptance for copy/apply operations."
    },
    {
      "name": "FormControlPropertyValueKind.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Forms/FormControlPropertyValueKind.cs",
      "summary": "Enum defining the value kind of form control properties (Literal, Rule, Mixed) for display and comparison."
    },
    {
      "name": "FormControlPropertyWrite.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Forms/FormControlPropertyWrite.cs",
      "summary": "Single entry point for writing a literal value to a form control DynamicProperty. Uses the correct DriveWorks transaction based on Static/Dynamic mode."
    },
    {
      "name": "FormControlRef.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Forms/FormControlRef.cs",
      "summary": "Script-facing reference to a form control in the context of a project. Wraps ProjectOpen, Form, and ControlBase for capture/apply/copy operations."
    },
    {
      "name": "FormControlRuledProperty.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Forms/FormControlRuledProperty.cs",
      "summary": "Read-only view of one DynamicProperty on one ControlBase, capturing Static/Dynamic mode, rule, value, and toggle state from the DriveWorks SDK."
    },
    {
      "name": "FormControlTableBuilder.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Forms/FormControlTableBuilder.cs",
      "summary": "Builds column plans and creates Simple, Calc, or Group tables from form control property metadata. Central to the List Data scripts."
    },
    {
      "name": "FormControlTypeResolver.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Forms/FormControlTypeResolver.cs",
      "summary": "Maps form control type names (e.g. TextBox, WebFrame) to DriveWorks.Forms ControlBase CLR types by searching loaded assemblies."
    },
    {
      "name": "FormControlTypes.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Forms/FormControlTypes.cs",
      "summary": "Static API for form control type names and property metadata. Defines all known control types and their property descriptors for use in dropdowns and conversion logic."
    },
    {
      "name": "FormControlTypeSelectionInputs.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Scripts/FormControlTypeSelectionInputs.cs",
      "summary": "Configure-time multi-select input for form control types. Builds checkbox input specs and parses pipe-delimited selections."
    },
    {
      "name": "FormsSectionMerger.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Comparison/FormsSectionMerger.cs",
      "summary": "Merges form section diffs from multiple comparison results into a unified forms section for combined reports."
    },
    {
      "name": "GenerationTaskDiffSummarizer.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/DiffSummarizers/GenerationTaskDiffSummarizer.cs",
      "summary": "Produces human-readable summaries for generation task (component task) field differences used in project comparison reports."
    },
    {
      "name": "GenerationTaskLocationDecoder.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/DiffSummarizers/GenerationTaskLocationDecoder.cs",
      "summary": "Maps ComponentTaskSequenceLocation enum values to DriveWorks UI display names (e.g. Pre Copy Tasks, Post Drive Tasks)."
    },
    {
      "name": "GitHelper.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/VersionControl/GitHelper.cs",
      "summary": "Thin wrapper around the git CLI for use by Toolkit version control scripts. Provides repo root detection, commit/ref queries, diff, stage, commit, push, and status operations."
    },
    {
      "name": "GroupComparisonResult.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Comparison/GroupComparisonResult.cs",
      "summary": "Result model for group-level comparison containing an error message and per-project comparison results."
    },
    {
      "name": "GroupConnectionIndex.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/CrossProject/GroupConnectionIndex.cs",
      "summary": "Immutable index of cross-project references for a group, supporting macro and rule cross-reference queries with conservative static resolution."
    },
    {
      "name": "GroupConnectionScanner.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/GroupConstants/GroupConnectionScanner.cs",
      "summary": "Extracts cross-project edges and heuristic text from an open SDK Project. Scans tasks, child specification definitions, and specification host controls for connection edges."
    },
    {
      "name": "GroupConstantsStore.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/GroupConstants/GroupConstantsStore.cs",
      "summary": "File-backed store for group-level constants per DriveWorks group. Uses TOML as primary format with JSON backward compatibility. Results are cached per file path with timestamp-based invalidation."
    },
    {
      "name": "GroupConstantsTomlIO.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/GroupConstants/GroupConstantsTomlIO.cs",
      "summary": "Serializes and deserializes GroupConstantsFile to/from TOML using Tomlyn. Aligned with snapshot TOML style for group constants."
    },
    {
      "name": "GroupOnlyResultTablePolicy.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Scripts/GroupOnlyResultTablePolicy.cs",
      "summary": "Policy that validates result tables in group-only mode. Ensures DataTable has a Project column and blocks SetResultTable calls missing it."
    },
    {
      "name": "GroupSlotStore.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/GroupConstants/GroupSlotStore.cs",
      "summary": "In-memory key-value store for group-level slot data. Supports set, get, identity listing, and clear operations."
    },
    {
      "name": "GroupSnapshotDeltaBuilder.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Snapshot/GroupSnapshotDeltaBuilder.cs",
      "summary": "Builds sparse GroupData plus GroupTomlDeltaRemovals from two full group snapshots for incremental TOML export."
    },
    {
      "name": "HtmlOutputFormatting.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Scripts/HtmlOutputFormatting.cs",
      "summary": "Simple HTML formatting helper that inserts newlines between tags for readable output."
    },
    {
      "name": "IAutexScript.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Scripts/IAutexScript.cs",
      "summary": "Core interface for runnable scripts exposed in the Autex Tools script list. Defines Id, DisplayName, Description, input specs, toolbar specs, and Run method."
    },
    {
      "name": "IAutexScriptContext.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Scripts/IAutexScriptContext.cs",
      "summary": "Context interface passed to scripts providing current group/project views, mode, output methods, input values, cancellation, and result display options including SelectAndContinue."
    },
    {
      "name": "IAutexScriptContextSupport.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Scripts/IAutexScriptContextSupport.cs",
      "summary": "Marker interface for objects that provide IAutexScriptContext support."
    },
    {
      "name": "IAutexScriptHelpers.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Scripts/IAutexScriptHelpers.cs",
      "summary": "Plugin-provided helper interface for scripts covering project data, rule analysis, CRUD operations, document creation, form control manipulation, and spell checking. The primary API surface for script-to-SDK interaction."
    },
    {
      "name": "IAutexToolsView.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/ScriptUi/IAutexToolsView.cs",
      "summary": "Abstraction of the Autex Tools UI used by the presenter. Defines events (Run, Abort, Undo) and setters for results, session output, and script list display."
    },
    {
      "name": "IComparisonSource.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Comparison/IComparisonSource.cs",
      "summary": "Interface for comparison data sources providing project data resolution for a revision descriptor."
    },
    {
      "name": "ICurrentView.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/ScriptUi/ICurrentView.cs",
      "summary": "Interface for the current view abstraction providing mode, emptiness check, and DataTable conversion."
    },
    {
      "name": "IDataTableInfo.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/ScriptUi/IDataTableInfo.cs",
      "summary": "Interface for DataTable info objects providing column metadata and row count."
    },
    {
      "name": "IDebugOnlyScript.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Scripts/IDebugOnlyScript.cs",
      "summary": "Marker interface for scripts that only appear in debug builds. Hidden from production script browsers."
    },
    {
      "name": "IGroupDataProvider.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Scripts/IGroupDataProvider.cs",
      "summary": "Data provider interface extending IAutexScriptHelpers with group/project CRUD, DriveControls setup, form control positioning, rule snapshot application, and team management."
    },
    {
      "name": "IGroupView.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/ScriptUi/IGroupView.cs",
      "summary": "Interface for group-level view providing group data, project listing, constants access, and connection scanning."
    },
    {
      "name": "IProjectDataSource.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/ScriptUi/IProjectDataSource.cs",
      "summary": "Abstraction for resolvable project data sources (open project, TOML file, pasted TOML, driveprojx, in-memory). Includes factory and source kind enum for comparison workflows."
    },
    {
      "name": "IProjectDataTypedComparer.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Comparison/TypedComparers/IProjectDataTypedComparer.cs",
      "summary": "Interface for type-specific project data comparers that produce typed diffs within the comparison engine."
    },
    {
      "name": "IProjectView.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/ScriptUi/IProjectView.cs",
      "summary": "Interface for project-level view providing project data, forms, constants, variables, and rule access."
    },
    {
      "name": "KnownLimitationPolicy.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Comparison/KnownLimitationPolicy.cs",
      "summary": "Tags comparison rows with known-limitation annotations during SDK vs .driveprojx compares, enforcing the two approved archive limitations from the parity contract."
    },
    {
      "name": "ListDataFilterNames.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Scripts/ListDataFilterNames.cs",
      "summary": "Constants for list data filter input IDs and special filter values (All, SpecificationMacroOnly)."
    },
    {
      "name": "ListDataScriptInputSpecs.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Scripts/ListDataScriptInputSpecs.cs",
      "summary": "Builds input specs for list data scripts including control type dropdown and name/rule/value filter inputs."
    },
    {
      "name": "LookupTableDiffSummarizer.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/DiffSummarizers/LookupTableDiffSummarizer.cs",
      "summary": "Produces human-readable summaries for lookup table differences in project comparison reports."
    },
    {
      "name": "ModelRuleTypeDecoder.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/ModelRules/ModelRuleTypeDecoder.cs",
      "summary": "Maps model rule type enum values to human-readable display names for reports and diagnostics."
    },
    {
      "name": "ModuleInitializerAttribute.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Scripts/ModuleInitializerAttribute.cs",
      "summary": "Polyfill for System.Runtime.CompilerServices.ModuleInitializerAttribute for .NET Framework targets."
    },
    {
      "name": "NameCheckCollector.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Engines/NameCheckCollector.cs",
      "summary": "Shared PascalCase and spelling name checks for CheckNames and PrePushValidation. Validates naming conventions, detects spelling issues, and suggests corrections."
    },
    {
      "name": "NamedReadOnlyList.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Scripts/NamedReadOnlyList.cs",
      "summary": "Generic read-only list wrapper with a Name property. Used for typed collections of named items in the data model."
    },
    {
      "name": "NameErrorDiagnosticResult.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Engines/NameErrorDiagnosticResult.cs",
      "summary": "Result model for #NAME error diagnostics containing root cause keys and per-key reasons with span information."
    },
    {
      "name": "OptionalPluginProbe.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Scripts/OptionalPluginProbe.cs",
      "summary": "Reflection-based probe for optional plugin types and methods. Used to detect and invoke features from AutexCustom and other optional plugins at runtime."
    },
    {
      "name": "PascalCaseCheckRegistry.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Rules/PascalCaseCheckRegistry.cs",
      "summary": "Registry of items to check for PascalCase naming compliance at project and group level. Builds check items from project data and group constants."
    },
    {
      "name": "PascalCaseValidator.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Rules/PascalCaseValidator.cs",
      "summary": "Validates PascalCase naming conventions by splitting identifiers into segments and checking capitalization and spelling against the dictionary."
    },
    {
      "name": "ProjectComparisonKeys.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Comparison/ProjectComparisonKeys.cs",
      "summary": "Static helper generating stable comparison keys for each project data type (constants, variables, forms, documents, rules, etc.) used to match items across two project snapshots."
    },
    {
      "name": "ProjectComparisonPolicy.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Comparison/ProjectComparisonPolicy.cs",
      "summary": "Policy class determining comparison behavior flags: driveprojx mode, strict round-trip parity, subset normalization, and TOML shape normalization."
    },
    {
      "name": "ProjectComparisonReport.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/DiffSummarizers/ProjectComparisonReport.cs",
      "summary": "Formats ProjectComparisonResult as Markdown, HTML (via Scriban WebView), or CSV. Supports single, unified, and combined comparison reports."
    },
    {
      "name": "ProjectConnectionEdge.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/CrossProject/ProjectConnectionEdge.cs",
      "summary": "Value type representing a directed cross-project connection edge with kind, source/target project, macro name, and notes."
    },
    {
      "name": "ProjectDataComparer.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/DiffSummarizers/ProjectDataComparer.cs",
      "summary": "Top-level entry point for comparing two ProjectData instances. Delegates to ProjectDataComparisonEngine."
    },
    {
      "name": "ProjectDataComparisonEngine.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Comparison/ProjectDataComparisonEngine.cs",
      "summary": "Core comparison engine that compares two ProjectData instances producing a structured diff across all data types (constants, variables, forms, documents, settings, specification flow, etc.) with typed comparer delegation."
    },
    {
      "name": "ProjectFolderFileComparer.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Comparison/ProjectFolderFileComparer.cs",
      "summary": "Compares project folder file trees between two revisions, detecting added/removed/modified files with hash-based content comparison and text diff support."
    },
    {
      "name": "ProjectRulesFromCollectionsBuilder.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Rules/ProjectRulesFromCollectionsBuilder.cs",
      "summary": "Builds project snapshot rules from DriveProjx collection-based data. Merges rule collections, deduplicates constants/variables, and appends table rules."
    },
    {
      "name": "ProjectSnapshotDeltaBuilder.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Snapshot/ProjectSnapshotDeltaBuilder.cs",
      "summary": "Builds sparse ProjectData plus ProjectTomlDeltaRemovals from two full snapshots for incremental TOML export."
    },
    {
      "name": "RemoveMetaclassTokensTransform.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Metaclass/RemoveMetaclassTokensTransforms.cs",
      "summary": "Transforms rule text by removing metaclass tokens. Computes after-text and formats apply payloads for metaclass removal."
    },
    {
      "name": "ReplaceWithGroupConstantsMatching.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/GroupConstants/ReplaceWithGroupConstantsMatching.cs",
      "summary": "Value/name matching and rule text transforms for replacing local values with group constant references. Builds value indices and computes replacement scores."
    },
    {
      "name": "ReplaceWithGroupConstantsMatchingSelfTest.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Testing/ReplaceWithGroupConstantsMatchingSelfTest.cs",
      "summary": "Self-test for ReplaceWithGroupConstantsMatching. Runs validation tests on value indexing and name matching logic."
    },
    {
      "name": "RevisionDescriptor.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Comparison/RevisionDescriptor.cs",
      "summary": "Describes a comparison revision source (live SDK project, TOML file, git ref, driveprojx archive) with display labels and resolution metadata."
    },
    {
      "name": "RuleAnalysisModels.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Rules/RuleAnalysisModels.cs",
      "summary": "Data model for rule analysis findings including kind, message, and span information for diagnostic reporting."
    },
    {
      "name": "RuleCollectionHelper.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Rules/RuleCollectionHelper.cs",
      "summary": "Helper to extract all project rules from an open SDK Project into a flat list of InternalRuleItems."
    },
    {
      "name": "RuleDiagnostic.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Rules/RuleDiagnostic.cs",
      "summary": "Data model for a single rule diagnostic entry with error kind, reason, span bounds, root cause key, and diagnostic code."
    },
    {
      "name": "RuleDiagnosticCode.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Rules/RuleDiagnosticCode.cs",
      "summary": "Constants for well-known rule diagnostic codes used in error reporting."
    },
    {
      "name": "RuleErrorDetection.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Rules/RuleErrorDetection.cs",
      "summary": "Static helper to detect #NAME and #VALUE errors in rule evaluation results. Provides both production and test-facing methods."
    },
    {
      "name": "RuleErrorDiagnosticEntry.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Rules/RuleErrorDiagnosticEntry.cs",
      "summary": "Entry model for rule error diagnostics containing rule key, error kind, reason, root cause key, and span information."
    },
    {
      "name": "RuleErrorDiagnosticResult.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Rules/RuleErrorDiagnosticResult.cs",
      "summary": "Result model for rule error diagnostics containing diagnostic entries and root cause key sets."
    },
    {
      "name": "RuleErrorKind.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Rules/RuleErrorKind.cs",
      "summary": "Enum defining rule error kinds: NameError and ValueError."
    },
    {
      "name": "RuleFormatter.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Rules/RuleFormatter.cs",
      "summary": "DriveWorks rule formatter adapted from Python. Tokenizes and reformats rules with proper indentation for nested functions, arguments, and table literals."
    },
    {
      "name": "RuleFormattingCandidates.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Rules/RuleFormattingCandidates.cs",
      "summary": "Collects rules that are formatting candidates and applies formatted rule text with normalization and line ending handling."
    },
    {
      "name": "RuleNamePrefixes.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Rules/RuleNamePrefixes.cs",
      "summary": "Constants for DriveWorks rule name prefixes (Constant, Variable, CalcTable, GroupTable, LookupTable) used in rule parsing."
    },
    {
      "name": "RuleSectionMap.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Comparison/RuleSectionMap.cs",
      "summary": "Maps rule section names to comparison data type names for consistent categorization in the comparison report."
    },
    {
      "name": "RuleSpellCheckHelper.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Rules/RuleSpellCheckHelper.cs",
      "summary": "Extracts words from rule text for spell-checking. Tokenizes rules, splits PascalCase identifiers, and runs dictionary checks with suggestion generation."
    },
    {
      "name": "RuleStringSpans.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Rules/RuleStringSpans.cs",
      "summary": "Extracts string literal spans from DriveWorks rule text. Used to determine if an offset is inside a string literal for diagnostic purposes."
    },
    {
      "name": "ScribanUiRenderer.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebView/ScribanUiRenderer.cs",
      "summary": "Renders Scriban templates for composable WebView UI surfaces. Loads partials from feature folders or shared defaults."
    },
    {
      "name": "ScriptBrowserCatalogProjection.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/ScriptUi/ScriptBrowserCatalogProjection.cs",
      "summary": "Projects the script catalog into browser tiles with filtering, category matching, search, and enabled/disabled state for the Script Tools UI."
    },
    {
      "name": "ScriptBrowserRunCommandPolicy.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/ScriptUi/ScriptBrowserRunCommandPolicy.cs",
      "summary": "Evaluates whether a script's run command is allowed based on current mode, project state, and script context requirements."
    },
    {
      "name": "ScriptBrowserSurfaceModels.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/ScriptUi/ScriptBrowserSurfaceModels.cs",
      "summary": "Surface models for the script browser WebView including script tiles, categories, run commands, and display state."
    },
    {
      "name": "ScriptCategoryHelper.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Scripts/ScriptCategoryHelper.cs",
      "summary": "Helper to extract script category from namespace and provide the Version Control category name constant."
    },
    {
      "name": "ScriptContext.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Scripts/ScriptContext.cs",
      "summary": "Enum defining script context modes (Project, Group) for script execution."
    },
    {
      "name": "ScriptContextExtensions.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Scripts/ScriptContextExtensions.cs",
      "summary": "Extension methods for IAutexScriptContext reducing boilerplate in scripts. Provides require-open helpers, path resolution, input reading, and project/group guard methods."
    },
    {
      "name": "ScriptContextHelper.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Scripts/ScriptContextHelper.cs",
      "summary": "Helper for script context mode conversion, run support detection, and primary run button content resolution."
    },
    {
      "name": "ScriptInputSpec.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Scripts/ScriptInputSpec.cs",
      "summary": "Defines script input specifications including kind, validation, dependencies, and UI schema. Provides factory methods for Checkbox, Text, Dropdown, and FilePath inputs."
    },
    {
      "name": "ScriptMessages.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Scripts/ScriptMessages.cs",
      "summary": "Shared user-facing message constants for scripts (open project/group first, export path errors, data type selection prompts)."
    },
    {
      "name": "ScriptOperationResultColumns.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Scripts/ScriptOperationResultColumns.cs",
      "summary": "Column name constants for script operation result tables (Project, Item, Status, Reason)."
    },
    {
      "name": "ScriptTestCompanion.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Testing/ScriptTestCompanion.cs",
      "summary": "Test companion for scripts providing input override resolution and default input building for test runner integration."
    },
    {
      "name": "ScriptTestReport.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Testing/ScriptTestReport.cs",
      "summary": "Test report builder for script test suites. Creates result DataTables, publishes assertion tables, and manages stop-on-failure and summary reporting."
    },
    {
      "name": "ScriptToolsHostState.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/ScriptUi/ScriptToolsHostState.cs",
      "summary": "State model for the Script Tools WebView host including script catalog, categories, favorites, recents, search, results, cache panel, and review state. Large model with nested types."
    },
    {
      "name": "ScriptToolsScriptInputValidation.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/ScriptUi/ScriptToolsScriptInputValidation.cs",
      "summary": "Validates script input values before run. Checks required inputs, regex patterns, and project-blocking conditions for compare scripts."
    },
    {
      "name": "SelfParityGate.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Comparison/SelfParityGate.cs",
      "summary": "Pass/fail gate for self-compare parity testing (live SDK vs own .driveprojx or TOML round-trip), logging any diff rows as parity failures with section-limited output."
    },
    {
      "name": "SettingsComparer.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Comparison/SettingsComparer.cs",
      "summary": "Compares project-level settings between two snapshots, producing setting diffs for the comparison result."
    },
    {
      "name": "SlabPackingSettingsTableCatalog.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Catalogs/SlabPackingSettingsTableCatalog.cs",
      "summary": "Catalog of slab packing settings table rows. Provides header property/value matching, row lookup, and simple table data building."
    },
    {
      "name": "SnapshotDeltaMergeKeys.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Snapshot/SnapshotDeltaMergeKeys.cs",
      "summary": "Constants for snapshot delta merge key names (Constant, Variable, Form, Document, etc.) used in TOML delta serialization."
    },
    {
      "name": "SnapshotJsonSerialization.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Snapshot/SnapshotJsonSerialization.cs",
      "summary": "JSON serialization helpers for snapshot items using Newtonsoft.Json. Provides consistent item serialization for delta builders."
    },
    {
      "name": "SnapshotTomlDeltaExportHelper.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Snapshot/SnapshotTomlDeltaExportHelper.cs",
      "summary": "Helper for parsing export delta flags, capturing baselines, and writing group/project delta TOML files for incremental exports."
    },
    {
      "name": "SnapshotTomlDeltaTypes.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Snapshot/SnapshotTomlDeltaTypes.cs",
      "summary": "Type definitions for TOML delta payloads including project and group shapes, data sections, and removal lists."
    },
    {
      "name": "SnapshotTomlDeserializer.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Snapshot/SnapshotTomlDeserializer.cs",
      "summary": "Deserializes TOML (produced by SnapshotTomlSerializer) back into ProjectData and GroupData. Reverses projected sub-table format and restores omitted fields to defaults."
    },
    {
      "name": "SnapshotTomlExportSorter.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Snapshot/SnapshotTomlExportSorter.cs",
      "summary": "Sorts project and group data for deterministic TOML export ordering. Ensures consistent diff-friendly output."
    },
    {
      "name": "SnapshotTomlSerializer.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Snapshot/SnapshotTomlSerializer.cs",
      "summary": "Serializes ProjectData and GroupData to TOML via Tomlyn. Uses projected sub-tables for named collections and omits blank/default values for compact, diff-friendly output."
    },
    {
      "name": "SnapshotTomlUtf8FileWriter.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Snapshot/SnapshotTomlUtf8FileWriter.cs",
      "summary": "UTF-8 file writer for TOML output with configurable buffer size. Ensures consistent encoding for snapshot files."
    },
    {
      "name": "SpecificationFlowDiffEngine.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Comparison/SpecificationFlowDiffEngine.cs",
      "summary": "Path-based structural comparison engine for SpecificationFlow definitions, comparing states, transitions, conditions, and tasks between two flow versions."
    },
    {
      "name": "SpecificationFlowDisplay.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/SpecificationFlow/SpecificationFlowDisplay.cs",
      "summary": "Enriches and formats specification flow definitions for human-readable display. Builds state titles, transition labels, and tree-formatted text output."
    },
    {
      "name": "SpecificationFlowDisplaySelfTest.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Testing/SpecificationFlowDisplaySelfTest.cs",
      "summary": "Self-test for SpecificationFlowDisplay formatting logic. Validates state title resolution and tree output."
    },
    {
      "name": "SpecificationFlowDtoMapper.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/SpecificationFlow/SpecificationFlowDtoMapper.cs",
      "summary": "Maps specification flow data from SDK Project objects to DTO models for use in scripts and reports."
    },
    {
      "name": "SpecificationFlowFromXmlMapper.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/SpecificationFlow/SpecificationFlowFromXmlMapper.cs",
      "summary": "Parses specification flow definitions from preprocessed project XML into DTO models. Handles states, transitions, operations, tasks, and conditions."
    },
    {
      "name": "SpecificationFlowInfoToXmlMapper.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/SpecificationFlow/SpecificationFlowInfoToXmlMapper.cs",
      "summary": "Maps specification flow DTO models back to XML elements for write-back to DriveWorks projects. Resolves task and condition types."
    },
    {
      "name": "SpecificationFlowNodeXmlHelper.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/SpecificationFlow/SpecificationFlowNodeXmlHelper.cs",
      "summary": "Helper for cloning specification flow XML nodes during read-modify-write operations."
    },
    {
      "name": "SpecificationFlowPathHelper.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Comparison/SpecificationFlowPathHelper.cs",
      "summary": "Helper for combining and parsing specification flow display paths (state > transition > task) used in the diff engine."
    },
    {
      "name": "SpecificationFlowRuleFlattening.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/SpecificationFlow/SpecificationFlowRuleFlattening.cs",
      "summary": "Extracts and flattens rule text from specification flow properties for spell-checking and analysis. Builds rule lists from flow states and tasks."
    },
    {
      "name": "SpecificationFlowTomlMapper.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/SpecificationFlow/SpecificationFlowTomlMapper.cs",
      "summary": "Reads and writes SpecificationFlowDefinitionInfo as nested TOML. Handles deep cloning, TOML table construction, and legacy JSON migration."
    },
    {
      "name": "SpecificationMacroDiffSummarizer.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/SpecificationMacros/SpecificationMacroDiffSummarizer.cs",
      "summary": "Produces human-readable summaries for specification macro differences in project comparison reports."
    },
    {
      "name": "SpecificationMacroReferenceQueries.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/SpecificationMacros/SpecificationMacroReferenceQueries.cs",
      "summary": "Queries for specification macro cross-references. Detects if macros are referenced, collects triggers, and identifies RunMacro tasks in specification flows."
    },
    {
      "name": "SpecificationMacroSnapshotApply.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/SpecificationMacros/SpecificationMacroSnapshotApply.cs",
      "summary": "Applies specification macro snapshots to projects. Handles creation, update, and deletion of macros from snapshot data."
    },
    {
      "name": "SpecificationTaskWalker.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/SpecificationFlow/SpecificationTaskWalker.cs",
      "summary": "Walks specification flow tasks and macro tasks in an SDK Project. Enumerates all tasks, extracts property values, and appends string values for text analysis."
    },
    {
      "name": "SpellingDictionary.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Rules/SpellingDictionary.cs",
      "summary": "Hunspell-based spelling dictionary with en-GB embedded resources. Loads custom words, acronym prefixes, and typo mappings from user folders. Provides word checking, splitting, and suggestion generation."
    },
    {
      "name": "SpellingUserPaths.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Rules/SpellingUserPaths.cs",
      "summary": "Resolves user spelling folder paths from Documents/AutexToolkit/Spelling and legacy DLL folder. Provides file paths for custom words, acronyms, and mappings."
    },
    {
      "name": "TestResultCollector.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Testing/TestResultCollector.cs",
      "summary": "Simple pass/fail test result collector that accumulates results and converts to a list for reporting."
    },
    {
      "name": "TestRunner.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Testing/TestRunner.cs",
      "summary": "Runs test suites discovered from the script registry. Executes tests with optional stop-on-failure and collects results."
    },
    {
      "name": "TextFilterHelper.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/TextStrings/TextFilterHelper.cs",
      "summary": "Shared filter logic for Rule/Value columns. Supports Contains, StartsWith, Matches (regex), and Exactly operators with input spec generation."
    },
    {
      "name": "TextStringCandidateScanner.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/TextStrings/TextStringCandidateScanner.cs",
      "summary": "Finds double-quoted literals in DriveWorks rule text that may be user-facing i18n candidates. Skips lookup column names, SQL, paths, HTML, and group constant keys."
    },
    {
      "name": "TextStringCandidateScannerSelfTest.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Testing/TextStringCandidateScannerSelfTest.cs",
      "summary": "Self-test for TextStringCandidateScanner validating quoted literal extraction and skip heuristics."
    },
    {
      "name": "TextStringsGroupTableHelper.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/TextStrings/TextStringsGroupTableHelper.cs",
      "summary": "Helper for managing text strings in DriveWorks group tables. Provides grid lookup, key-value search, and row appending."
    },
    {
      "name": "TomlAtGitRefSource.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Comparison/TomlAtGitRefSource.cs",
      "summary": "IComparisonSource implementation that resolves project data from a TOML file at a specific git reference, enabling version-controlled snapshot comparison."
    },
    {
      "name": "ToolkitBrowseSidebarKeys.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/ScriptUi/ToolkitBrowseSidebarKeys.cs",
      "summary": "Constants for browse sidebar navigation keys: All, Recents, Favourites."
    },
    {
      "name": "ToolkitLog.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Diagnostics/ToolkitLog.cs",
      "summary": "Shared structured logging pipeline using Serilog. Writes compact JSON lines for diagnostics, mirrors to Debug output, and supports area-based loggers with environment variable configuration."
    },
    {
      "name": "ToolkitNativeHostShell.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Diagnostics/ToolkitNativeHostShell.cs",
      "summary": "Manages the native WPF host shell for Toolkit windows. Handles content attachment and chrome state (title, status bars, busy indicator)."
    },
    {
      "name": "ToolkitPreferenceList.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Ui/ToolkitPreferenceList.cs",
      "summary": "Manages favorite and recent item lists with configurable display/stored counts. Used for script favorites, icon picker, and metaclass picker preferences."
    },
    {
      "name": "ToolkitTry.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Diagnostics/ToolkitTry.cs",
      "summary": "Utility class providing safe execution wrappers and try-pattern helpers for DriveWorks SDK boundary calls."
    },
    {
      "name": "ToolkitUiFont.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Ui/ToolkitUiFont.cs",
      "summary": "Font management for the Toolkit UI. Provides standard font family names, font creation, CSS font-face generation, and embedded font resources."
    },
    {
      "name": "ToolkitUserUiPreferences.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Ui/ToolkitUserUiPreferences.cs",
      "summary": "User UI preferences model persisted to JSON. Manages script favorites/recents, icon picker favorites/recents, color favorites, group constant favorites, and metaclass picker preferences."
    },
    {
      "name": "ToolkitUserUiPreferencesStore.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Ui/ToolkitUserUiPreferencesStore.cs",
      "summary": "Singleton store for ToolkitUserUiPreferences. Provides thread-safe current access and mutate-and-save operations."
    },
    {
      "name": "ToolkitWindowChromeState.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Ui/ToolkitWindowChromeState.cs",
      "summary": "Immutable state model for Toolkit window chrome: product name, workflow name, context text, status bars, and busy state."
    },
    {
      "name": "ToolkitWpfDesignTokens.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Ui/ToolkitWpfDesignTokens.cs",
      "summary": "WPF-specific design tokens providing SolidColorBrush and FontFamily properties derived from the shared UiDesignTokens color palette."
    },
    {
      "name": "ToTableExtensions.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Scripts/ToTableExtensions.cs",
      "summary": "Extension methods converting various data types (constants, variables, form controls, documents, rules, etc.) to DataTable for display in the UI."
    },
    {
      "name": "UdfTestSuiteSelectionInputs.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Scripts/UdfTestSuiteSelectionInputs.cs",
      "summary": "Input spec builder for UDF test suite selection. Provides checkbox input for selecting which test suites (Geometry, Utility, RuleEval, Icons) to run."
    },
    {
      "name": "UiDesignTokens.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Ui/UiDesignTokens.cs",
      "summary": "Semantic UI design tokens shared between WPF styles and WebView CSS. Defines colors, spacing, radii, font sizes, shadows, and CSS variable generation."
    },
    {
      "name": "UndoOperation.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Scripts/UndoOperation.cs",
      "summary": "Discriminated union-like types for undo operations: UndoDelete, UndoCreate, UndoUpdate, UndoRename, UndoUpdateTeamPrivileges. Used for script undo logging."
    },
    {
      "name": "UnreferencedReferenceHelpers.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Engines/UnreferencedReferenceHelpers.cs",
      "summary": "Helpers for detecting unreferenced project items. Searches rule text for direct and indirect references to constants, variables, and other named items."
    },
    {
      "name": "UserMessageKind.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Scripts/UserMessageKind.cs",
      "summary": "Enum for user message kinds: Information, Warning, Error."
    },
    {
      "name": "VariablesTypedComparer.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Comparison/TypedComparers/VariablesTypedComparer.cs",
      "summary": "Typed comparer for project variables, producing item diffs for added/removed/modified/renamed variables."
    },
    {
      "name": "VcChangesCommands.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/VersionControl/VcChangesCommands.cs",
      "summary": "Version control commands for staging, committing, and pushing TOML changes. Wraps GitHelper operations with status reporting."
    },
    {
      "name": "VcScriptRunner.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/VersionControl/VcScriptRunner.cs",
      "summary": "Runner for version control scripts providing success/failure reporting, prose output, logging, and result table summaries."
    },
    {
      "name": "VcState.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/VersionControl/VcState.cs",
      "summary": "State models for version control: branch info, commit info, repo status, changed files, and TOML report gate state."
    },
    {
      "name": "VcTomlMirrorPathHelper.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/VersionControl/VcTomlMirrorPathHelper.cs",
      "summary": "Pure path helper for tracked full TOML representations of native DriveWorks files. Resolves mirror paths under the AutexToolkit folder in the repository."
    },
    {
      "name": "VcTomlReportArtifactManifest.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/VersionControl/VcTomlReportArtifactManifest.cs",
      "summary": "Data contract and serialization for VC TOML report artifacts. Tracks per-file source-to-TOML mappings with hash verification, error collection, and TOML manifest persistence."
    },
    {
      "name": "VcTomlReportGateState.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/VersionControl/VcTomlReportGateState.cs",
      "summary": "State management for the VC TOML report gate that determines when TOML reports are fresh enough to use for comparison operations."
    },
    {
      "name": "WebFormMainMjsReferenceGenerator.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebView/WebFormMainMjsReferenceGenerator.cs",
      "summary": "Parses DriveWorks Web Form Designer Main.mjs to extract dw-* custom elements, shadow parts, exportparts, and --dw-* CSS variables. Generates reference documentation for form styling."
    },
    {
      "name": "WebViewComposableFragments.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebView/WebViewComposableFragments.cs",
      "summary": "Builds composable WebView HTML fragments for rendering script results, comparison reports, and other UI surfaces in the Toolkit WebView host."
    },
    {
      "name": "WebViewPageRenderer.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebView/WebViewPageRenderer.cs",
      "summary": "Renders full WebView pages with HTML, CSS, and JS assets for the Toolkit UI. Handles page composition and asset loading."
    },
    {
      "name": "WebViewPartialRenderer.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebView/WebViewPartialRenderer.cs",
      "summary": "Renders partial HTML fragments for WebView composition. Used for inline updates and AJAX-style content replacement."
    }
  ],
  "data-models": [
    {
      "name": "CalcTableInfo.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Models/Tables/CalcTableInfo.cs",
      "summary": "Data model for calc tables with column definitions, row data, and rule text. Supports column rule extraction and table comparison."
    },
    {
      "name": "CapturedComponentInfo.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Models/Documents/CapturedComponentInfo.cs",
      "summary": "Data model for captured 3D component information including component path and parameter references."
    },
    {
      "name": "ColumnWidthSpec.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/ScriptUi/ColumnWidthSpec.cs",
      "summary": "Specification for DataTable column widths used in UI display. Supports fixed and percentage-based widths."
    },
    {
      "name": "ConstantCategoryInfo.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Models/Rules/ConstantCategoryInfo.cs",
      "summary": "Data model for constant category information with name and path."
    },
    {
      "name": "ConstantInfo.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Models/Rules/ConstantInfo.cs",
      "summary": "Data model for a DriveWorks constant with name, value, comment, and category."
    },
    {
      "name": "DataDocumentInfo.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Models/Documents/DataDocumentInfo.cs",
      "summary": "Data model for data document information including document type and file path."
    },
    {
      "name": "DataTableInfo.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Models/Tables/DataTableInfo.cs",
      "summary": "2D data table model for group tables and lookup tables. Implements IDataTableInfo with derived row/column counts, column names, and rule name computation."
    },
    {
      "name": "DataTypeOptions.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Models/Tables/DataTypeOptions.cs",
      "summary": "Static API for data type display names (Constants, Variables, Tables, etc.) with CRUD operation filtering. Determines which data types are available for each operation."
    },
    {
      "name": "DocumentInfo.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Models/Documents/DocumentInfo.cs",
      "summary": "Data model for document information including type and display name."
    },
    {
      "name": "DriveAppInfo.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Models/Misc/DriveAppInfo.cs",
      "summary": "Data model for DriveApp information including name and configuration."
    },
    {
      "name": "EnvironmentSettingInfo.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Models/Misc/EnvironmentSettingInfo.cs",
      "summary": "Data model for environment setting information with name and value."
    },
    {
      "name": "FindReplaceResult.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Models/Rules/FindReplaceResult.cs",
      "summary": "Data model for find/replace operation results including match location, old text, new text, and success status."
    },
    {
      "name": "FormControlInfo.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Models/Forms/FormControlInfo.cs",
      "summary": "Data model for form control information including name, type, and form reference."
    },
    {
      "name": "FormControlPropertyDescriptor.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Models/Forms/FormControlPropertyDescriptor.cs",
      "summary": "Descriptor for form control properties defining name, category, value kind, and rule support."
    },
    {
      "name": "FormControlPropertyInfo.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Models/Forms/FormControlPropertyInfo.cs",
      "summary": "Data model for form control property info with name, value, rule, comment, and rule-driven flag."
    },
    {
      "name": "FormInfo.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Models/Forms/FormInfo.cs",
      "summary": "Data model for form information including name and control list."
    },
    {
      "name": "FormMessageInfo.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Models/Forms/FormMessageInfo.cs",
      "summary": "Data model for form message information with code and message text."
    },
    {
      "name": "FunctionInfoDto.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Models/Misc/FunctionInfoDto.cs",
      "summary": "DTO for DriveWorks function information including name and parameter count."
    },
    {
      "name": "GenerationTaskInfo.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Models/Misc/GenerationTaskInfo.cs",
      "summary": "Data model for generation task (component task) information including component, location, index, name, and type."
    },
    {
      "name": "GroupData.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Models/Group/GroupData.cs",
      "summary": "In-memory representation of a theoretical DriveWorks group. Implements IGroupView with all group properties (teams, users, tables, projects). No SDK connection; can be built entirely in memory."
    },
    {
      "name": "GroupData.MergeDelta.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Models/Group/GroupData.MergeDelta.cs",
      "summary": "Partial class of GroupData handling merge delta operations. Merges sparse delta GroupData into a full snapshot."
    },
    {
      "name": "GroupOpen.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Models/Group/GroupOpen.cs",
      "summary": "Script-facing view of the currently open DriveWorks group. Implements IGroupView with lazy SDK accessors, sync/async mutation modes, and CopyFrom/Push for batch apply."
    },
    {
      "name": "InternalRuleItem.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Models/Rules/InternalRuleItem.cs",
      "summary": "Internal rule item model for rule collection building. Contains rule name, formula, and section metadata."
    },
    {
      "name": "IReadOnlySpecificationFlowDefinition.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Models/SpecificationFlow/IReadOnlySpecificationFlowDefinition.cs",
      "summary": "Read-only interface for specification flow definition access."
    },
    {
      "name": "LoginConstantsMigrationModels.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Models/Misc/LoginConstantsMigrationModels.cs",
      "summary": "Models for login constants migration between DriveWorks versions."
    },
    {
      "name": "ModelRuleInfo.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Models/Misc/ModelRuleInfo.cs",
      "summary": "Data model for model rule information including name, type, component, and rule formula."
    },
    {
      "name": "ProjectComparisonResult.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Comparison/ProjectComparisonResult.cs",
      "summary": "Result of comparing two ProjectData instances. Contains setting diffs, list diffs per data type, revision metadata, and normalization flags for report generation."
    },
    {
      "name": "ProjectData.Comparison.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Models/Project/ProjectData.Comparison.cs",
      "summary": "Partial class of ProjectData with comparison helper methods and convenience accessors for diff generation."
    },
    {
      "name": "ProjectData.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Models/Project/ProjectData.cs",
      "summary": "In-memory representation of a theoretical DriveWorks project. The unified data model for SDK reader, archive reader, TOML, comparison engine, and reports. Implements IProjectView."
    },
    {
      "name": "ProjectData.MergeDelta.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Models/Project/ProjectData.MergeDelta.cs",
      "summary": "Partial class of ProjectData handling merge delta operations. Merges sparse delta ProjectData and removals into a full snapshot."
    },
    {
      "name": "ProjectDataList.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Models/Project/ProjectDataList.cs",
      "summary": "Typed list wrapper for named project data items with lookup and enumeration support."
    },
    {
      "name": "ProjectDetailInfo.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Models/Project/ProjectDetailInfo.cs",
      "summary": "Data model for project detail information including name and metadata."
    },
    {
      "name": "ProjectOpen.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Models/Project/ProjectOpen.cs",
      "summary": "Script-facing view of the currently open DriveWorks project. Implements IProjectView with lazy SDK accessors, sync/async mutation, DeepCopy, CopyFrom/Push, and form control operations."
    },
    {
      "name": "ProjectOpenList.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Models/Project/ProjectOpenList.cs",
      "summary": "Collection of ProjectOpen instances for group-level project enumeration."
    },
    {
      "name": "RuleInfo.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Models/Rules/RuleInfo.cs",
      "summary": "Data model for rule information including name, formula, section, and evaluated value."
    },
    {
      "name": "ScriptDataTypeLists.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Models/Tables/ScriptDataTypeLists.cs",
      "summary": "Canonical lists of data type names for each script operation (CRUD, list data, PascalCase check, create data). Central reference for data type filtering."
    },
    {
      "name": "ScriptToolbarSpec.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/ScriptUi/ScriptToolbarSpec.cs",
      "summary": "Specification for script toolbar buttons (e.g. CSV export, save report) shown alongside script results."
    },
    {
      "name": "SnapshotApplyOptions.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Models/Project/SnapshotApplyOptions.cs",
      "summary": "Options for applying snapshots to projects and groups. Controls which data sections to include, merge behavior, and conflict resolution."
    },
    {
      "name": "SpecialVariableInfo.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Models/Rules/SpecialVariableInfo.cs",
      "summary": "Data model for special variable information (MyNumber, MyName, etc.) with name and value."
    },
    {
      "name": "SpecificationFlowConditionInfo.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Models/SpecificationFlow/SpecificationFlowConditionInfo.cs",
      "summary": "Data model for specification flow conditions with id, type, and property values."
    },
    {
      "name": "SpecificationFlowDefinitionInfo.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Models/SpecificationFlow/SpecificationFlowDefinitionInfo.cs",
      "summary": "Root data model for a specification flow definition containing initial state, states list, and default flag."
    },
    {
      "name": "SpecificationFlowEventInfo.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Models/SpecificationFlow/SpecificationFlowEventInfo.cs",
      "summary": "Data model for specification flow events (OnEnter/OnLeave) containing event name and task list."
    },
    {
      "name": "SpecificationFlowOperationInfo.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Models/SpecificationFlow/SpecificationFlowOperationInfo.cs",
      "summary": "Data model for specification flow operations with id, type, name, and enabled flag."
    },
    {
      "name": "SpecificationFlowStateInfo.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Models/SpecificationFlow/SpecificationFlowStateInfo.cs",
      "summary": "Data model for specification flow states containing id, title, type, events, operations, and transitions."
    },
    {
      "name": "SpecificationFlowTaskInfo.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Models/SpecificationFlow/SpecificationFlowTaskInfo.cs",
      "summary": "Data model for specification flow tasks with id, type, name, and enabled flag."
    },
    {
      "name": "SpecificationFlowTransitionInfo.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Models/SpecificationFlow/SpecificationFlowTransitionInfo.cs",
      "summary": "Data model for specification flow transitions containing source/target state ids, condition, and display label."
    },
    {
      "name": "SpecificationMacroCategoryInfo.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Models/SpecificationMacros/SpecificationMacroCategoryInfo.cs",
      "summary": "Data model for specification macro category information with name and path."
    },
    {
      "name": "SpecificationMacroClonePayload.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Models/SpecificationMacros/SpecificationMacroClonePayload.cs",
      "summary": "Payload model for cloning specification macros including source name and target name."
    },
    {
      "name": "SpecificationMacroInfo.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Models/SpecificationMacros/SpecificationMacroInfo.cs",
      "summary": "Data model for specification macro information including name, category, tasks, and trigger settings."
    },
    {
      "name": "SpecificationMacroTaskInfo.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Models/SpecificationMacros/SpecificationMacroTaskInfo.cs",
      "summary": "Data model for specification macro task information with type and properties."
    },
    {
      "name": "SpecificationMacroTaskPropertyInfo.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Models/SpecificationMacros/SpecificationMacroTaskPropertyInfo.cs",
      "summary": "Data model for specification macro task property information including name, value, and property type."
    },
    {
      "name": "SpecificationPropertyInfo.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Models/Misc/SpecificationPropertyInfo.cs",
      "summary": "Data model for specification property information with name, value, and type."
    },
    {
      "name": "SpecificationSettingInfo.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Models/Misc/SpecificationSettingInfo.cs",
      "summary": "Data model for specification setting information with name and value."
    },
    {
      "name": "TableData.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Models/Tables/TableData.cs",
      "summary": "Generic table data model with column names and row values. Used for serializing table data in snapshots and reports."
    },
    {
      "name": "TeamInfo.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Models/Misc/TeamInfo.cs",
      "summary": "Data model for DriveWorks team information including name and privileges."
    },
    {
      "name": "ThreeDDocumentInfo.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Models/Documents/ThreeDDocumentInfo.cs",
      "summary": "Data model for 3D document information including document type and display file."
    },
    {
      "name": "ThreeDEnvironmentSyncItem.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Models/Documents/ThreeDEnvironmentSyncItem.cs",
      "summary": "Data model for 3D environment synchronization items mapping component paths to environment settings."
    },
    {
      "name": "UserInfo.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Models/Misc/UserInfo.cs",
      "summary": "Data model for DriveWorks user information including name and team membership."
    },
    {
      "name": "VariableCategoryInfo.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Models/Rules/VariableCategoryInfo.cs",
      "summary": "Data model for variable category information with name and path."
    },
    {
      "name": "VariableInfo.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Models/Rules/VariableInfo.cs",
      "summary": "Data model for DriveWorks variable information including name, value, rule, and comment."
    }
  ],
  "scripts": [
    {
      "name": "AnalyzeRuleErrors.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Scripts/WIP/AnalyzeRuleErrors.cs",
      "summary": "WIP script for analyzing rule errors across the project. Detects name errors, value errors, and root cause chains in DriveWorks rules."
    },
    {
      "name": "ApplyProjectFromTomlTest.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Scripts/Test/ApplyProjectFromTomlTest.cs",
      "summary": "Test script verifying TOML-based project application: delta import, property overwrite, and removal handling."
    },
    {
      "name": "ChangeSummary.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Scripts/VersionControl/ChangeSummary.cs",
      "summary": "Version control script that generates a change summary between the current project state and the last committed TOML snapshot."
    },
    {
      "name": "CheckNames.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Scripts/Release/CheckNames.cs",
      "summary": "Release script that validates naming conventions (PascalCase, spelling) across all project data items. Reports violations with suggestions."
    },
    {
      "name": "CheckNamesTest.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Scripts/Test/CheckNamesTest.cs",
      "summary": "Test script for the CheckNames naming validation pipeline. Tests PascalCase detection, spelling validation, and suggestion generation."
    },
    {
      "name": "CheckValueRulesTest.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Scripts/Test/CheckValueRulesTest.cs",
      "summary": "Test script for value rule error detection. Validates identification of value errors in DriveWorks rules."
    },
    {
      "name": "CircleFromThreePointsTest.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Scripts/Test/CircleFromThreePointsTest.cs",
      "summary": "Test script for the circle-from-three-points geometry UDF. Validates geometric calculations and edge cases."
    },
    {
      "name": "CompareGroupVsSingleControlProperties.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Scripts/Dev/CompareGroupVsSingleControlProperties.cs",
      "summary": "Dev script that compares group-level vs single control property definitions to identify discrepancies in form control configuration."
    },
    {
      "name": "CompareGroupVsSingleControlPropertiesTest.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Scripts/Test/CompareGroupVsSingleControlPropertiesTest.cs",
      "summary": "Test script for the group vs single control property comparison dev script."
    },
    {
      "name": "CompareProjects.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Scripts/Release/CompareProjects.cs",
      "summary": "Release script comparing two DriveWorks projects at ProjectData level. Supports current project, TOML files, and .driveprojx archives with side-by-side HTML diff reports."
    },
    {
      "name": "CompareProjectsTest.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Scripts/Test/CompareProjectsTest.cs",
      "summary": "Comprehensive test script for the CompareProjects pipeline. Tests ProjectDataComparer, ProjectComparisonReport, ProjectDataSourceFactory with contract and integration tests including live parity checks."
    },
    {
      "name": "CompareRulesAndSettingsDump.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Scripts/Test/CompareRulesAndSettingsDump.cs",
      "summary": "Test script that compares rules and settings dumps for regression testing of rule formatting changes."
    },
    {
      "name": "CopySelectedProjectData.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Scripts/Release/CopySelectedProjectData.cs",
      "summary": "Release script for copying selected project data rows from a source project into the currently open project. Supports multi-type filtering, batch copy, and project picker for multi-destination copy."
    },
    {
      "name": "CopySelectedProjectDataTest.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Scripts/Test/CopySelectedProjectDataTest.cs",
      "summary": "Test script for the CopySelectedProjectData. Tests row selection, copy logic, override behavior, and multi-destination project picker."
    },
    {
      "name": "CreateData.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Scripts/Release/CreateData.cs",
      "summary": "Release script for creating new project data items (constants, variables, form controls, etc.) with user-specified values and rules."
    },
    {
      "name": "CreateDataTest.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Scripts/Test/CreateDataTest.cs",
      "summary": "Test script for the CreateData CRUD operations. Validates creation of constants, variables, form controls, and other data types."
    },
    {
      "name": "CrossGroupCompareFeasibilityProbe.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Scripts/Dev/CrossGroupCompareFeasibilityProbe.cs",
      "summary": "Dev-only feasibility probe for cross-group project comparison. Explores same-window snapshot handoff, cross-process observation, named pipes, and UI automation approaches."
    },
    {
      "name": "CustomFormControlTypeDiscovery.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Scripts/Dev/CustomFormControlTypeDiscovery.cs",
      "summary": "Dev script that discovers custom form control types registered in the DriveWorks project, listing their properties and metadata."
    },
    {
      "name": "CustomFunctionUdfTest.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Scripts/Test/CustomFunctionUdfTest.cs",
      "summary": "Test script for custom function UDF evaluation. Tests geometry and utility UDF suites."
    },
    {
      "name": "DeleteData.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Scripts/Release/DeleteData.cs",
      "summary": "Release script for deleting selected project data items with confirmation and undo support."
    },
    {
      "name": "DeleteDataTest.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Scripts/Test/DeleteDataTest.cs",
      "summary": "Test script for the DeleteData. Validates deletion of project data items with undo support."
    },
    {
      "name": "DriveControls.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Scripts/Release/DriveControls.cs",
      "summary": "Release script for driving (applying values to) form controls in the current project. Used for batch property updates."
    },
    {
      "name": "DriveControlsTest.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Scripts/Test/DriveControlsTest.cs",
      "summary": "Test script for the DriveControls batch property update functionality."
    },
    {
      "name": "DriveProjXFileReaderTest.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Scripts/Test/DriveProjXFileReaderTest.cs",
      "summary": "Test script for the DriveProjXFileReader. Tests archive parsing, form XML extraction, and ProjectData building from .driveprojx files."
    },
    {
      "name": "DynamicPropertyProbe.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Scripts/Dev/DynamicPropertyProbe.cs",
      "summary": "Dev script that probes dynamic (rule-driven) properties on form controls to understand which properties support rule binding."
    },
    {
      "name": "ExportFormControlMetadata.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Scripts/Dev/ExportFormControlMetadata.cs",
      "summary": "Dev script that exports form control metadata (types, properties, categories) to a structured report for analysis."
    },
    {
      "name": "ExportFormControlMetadataTest.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Scripts/Test/ExportFormControlMetadataTest.cs",
      "summary": "Test script for the ExportFormControlMetadata dev script."
    },
    {
      "name": "ExportFunctionsReport.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Scripts/Dev/ExportFunctionsReport.cs",
      "summary": "Dev script that exports a report of all DriveWorks functions available in the project context, including custom UDF registrations."
    },
    {
      "name": "ExportFunctionsReportTest.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Scripts/Test/ExportFunctionsReportTest.cs",
      "summary": "Test script for the ExportFunctionsReport dev script."
    },
    {
      "name": "ExportGroupProjectToml.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Scripts/Release/ExportGroupProjectToml.cs",
      "summary": "Release script for exporting group and project snapshots as TOML files to a specified directory."
    },
    {
      "name": "ExportGroupProjectTomlTest.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Scripts/Test/ExportGroupProjectTomlTest.cs",
      "summary": "Test script for TOML export. Validates group and project snapshot serialization to TOML format."
    },
    {
      "name": "ExportToGitFolderToml.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Scripts/VersionControl/ExportToGitFolderToml.cs",
      "summary": "Version control script that exports group and project TOML snapshots to a git repository folder with optional staging and committing."
    },
    {
      "name": "FindReplaceInRules.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Scripts/Release/FindReplaceInRules.cs",
      "summary": "Release script for find-and-replace operations across all DriveWorks rules in a project. Supports regex patterns, preview, and selective application."
    },
    {
      "name": "FindReplaceInRulesTest.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Scripts/Test/FindReplaceInRulesTest.cs",
      "summary": "Test script for the FindReplaceInRules. Tests pattern matching, replacement logic, preview generation, and selective application."
    },
    {
      "name": "FontDiscovery.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Scripts/Dev/FontDiscovery.cs",
      "summary": "Dev script that discovers and lists font families available on the system, used for validating font-related form control properties."
    },
    {
      "name": "FontDiscoveryTest.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Scripts/Test/FontDiscoveryTest.cs",
      "summary": "Test script for the FontDiscovery. Validates font family enumeration and style discovery."
    },
    {
      "name": "FormatAllRules.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Scripts/Release/FormatAllRules.cs",
      "summary": "Release script that formats all DriveWorks rules in the project using the rule formatter for consistent style and readability."
    },
    {
      "name": "FormatAllRulesTest.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Scripts/Test/FormatAllRulesTest.cs",
      "summary": "Test script for the FormatAllRules. Validates batch rule formatting across the project."
    },
    {
      "name": "FormControlConversionPropertyMatrix.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Scripts/Dev/FormControlConversionPropertyMatrix.cs",
      "summary": "Dev script that generates a property matrix report showing which properties are preserved, mapped, or lost during form control type conversion."
    },
    {
      "name": "FormControlConversionTest.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Scripts/Test/FormControlConversionTest.cs",
      "summary": "Comprehensive test script for form control type conversion. Tests property mapping, value transfer, and conversion matrix across all control types."
    },
    {
      "name": "FormDesignerInspectDiscovery.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Scripts/Dev/FormDesignerInspectDiscovery.cs",
      "summary": "Dev script that probes the Form Designer's inspection API to discover available property and control metadata."
    },
    {
      "name": "FormDesignerWebViewIntegrationProbe.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Scripts/Dev/FormDesignerWebViewIntegrationProbe.cs",
      "summary": "Dev script probing WebView2 integration points within the DriveWorks Form Designer for potential UI extension."
    },
    {
      "name": "GitPushStatus.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Scripts/VersionControl/GitPushStatus.cs",
      "summary": "Version control script that reports git push status including branch tracking, ahead/behind counts, and uncommitted changes."
    },
    {
      "name": "GroupConstantCandidates.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Scripts/WIP/GroupConstantCandidates.cs",
      "summary": "WIP script that scans project rules for literal values that could be replaced with group constants. Suggests candidates based on value patterns."
    },
    {
      "name": "GroupConstantCandidatesTest.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Scripts/Test/GroupConstantCandidatesTest.cs",
      "summary": "Test script for the GroupConstantCandidates WIP script. Validates candidate detection and suggestion logic."
    },
    {
      "name": "GroupLevelTest.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Scripts/Test/GroupLevelTest.cs",
      "summary": "Test script for group-level operations. Validates group constant access, group settings, and multi-project group iteration."
    },
    {
      "name": "GroupOnlyResultTablePolicyTest.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Scripts/Test/GroupOnlyResultTablePolicyTest.cs",
      "summary": "Test script for the GroupOnlyResultTablePolicy. Validates that result tables in group mode include the required project column."
    },
    {
      "name": "GroupSettingsSetterTestScript.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Scripts/Test/GroupSettingsSetterTest.cs",
      "summary": "Test script for group settings modification. Tests reading and writing group-level settings with validation."
    },
    {
      "name": "ImagePathSwap.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Scripts/Dev/ImagePathSwap.cs",
      "summary": "Dev script for batch-swapping image paths in form control properties. Supports find/replace patterns for migrating image references between environments."
    },
    {
      "name": "ImagePathSwapTest.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Scripts/Test/ImagePathSwapTest.cs",
      "summary": "Test script for the ImagePathSwap. Validates batch image path find/replace operations."
    },
    {
      "name": "ImportFromGitFolder.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Scripts/VersionControl/ImportFromGitFolder.cs",
      "summary": "Version control script that imports project data from TOML files in a git repository folder into the currently open project."
    },
    {
      "name": "JustFixIt.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Scripts/Release/JustFixIt.cs",
      "summary": "Release script that applies a bundle of common auto-fixes to the project (name corrections, rule formatting, etc.) in a single pass."
    },
    {
      "name": "JustFixItTest.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Scripts/Test/JustFixItTest.cs",
      "summary": "Test script for the JustFixIt auto-fix bundle. Validates that bundled corrections apply correctly."
    },
    {
      "name": "LabelColumnPropertyTest.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Scripts/Test/LabelColumnPropertyTest.cs",
      "summary": "Test script for label column property handling in form controls. Tests label text extraction, column mapping, and display formatting."
    },
    {
      "name": "ListData.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Scripts/Release/ListData.cs",
      "summary": "Release script for listing project data items of a selected type with filtering and export capabilities."
    },
    {
      "name": "ListDataTest.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Scripts/Test/ListDataTest.cs",
      "summary": "Test script for the ListData. Validates data listing, filtering, and table generation across data types."
    },
    {
      "name": "ListFormControlPropertyMetadata.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Scripts/Dev/ListFormControlPropertyMetadata.cs",
      "summary": "Dev script that lists all form control property metadata including types, categories, and rule support capabilities."
    },
    {
      "name": "ListFormControlPropertyMetadataTest.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Scripts/Test/ListFormControlPropertyMetadataTest.cs",
      "summary": "Test script for the ListFormControlPropertyMetadata dev script."
    },
    {
      "name": "MacroTriggers.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Scripts/Release/MacroTriggers.cs",
      "summary": "Release script that lists specification macro triggers and their references across the project for dependency analysis."
    },
    {
      "name": "MacroTriggersTest.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Scripts/Test/MacroTriggersTest.cs",
      "summary": "Test script for the MacroTriggers. Validates specification macro trigger detection and reference analysis."
    },
    {
      "name": "MigrateLoginConstants.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Scripts/Dev/MigrateLoginConstants.cs",
      "summary": "Dev script for migrating login-related constants between group configurations. Handles renaming, value transfer, and category assignment."
    },
    {
      "name": "PrePushValidation.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Scripts/VersionControl/PrePushValidation.cs",
      "summary": "Version control script that runs pre-push validation checks including naming conventions and rule error detection before allowing git push."
    },
    {
      "name": "PrePushValidationTest.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Scripts/Test/PrePushValidationTest.cs",
      "summary": "Test script for the PrePushValidation version control script. Validates naming checks and rule error detection before git push."
    },
    {
      "name": "ProjectDataParityDiagnostic.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Scripts/Dev/ProjectDataParityDiagnostic.cs",
      "summary": "Diagnostic script for verifying snapshot parity between SDK reads and TOML/archive round-trips. Reports discrepancies by data section."
    },
    {
      "name": "ProjectLevelTest.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Scripts/Test/ProjectLevelTest.cs",
      "summary": "Test script for project-level operations. Tests project data access, snapshot building, and SDK interaction."
    },
    {
      "name": "ProjectSelfCompareHarnessTest.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Scripts/Test/ProjectSelfCompareHarnessTest.cs",
      "summary": "Test script for the self-comparison harness. Validates that a project compared against itself produces no differences (parity baseline)."
    },
    {
      "name": "PropertyModesProbe.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Scripts/Dev/PropertyModesProbe.cs",
      "summary": "Dev script probing DriveWorks property modes (Static, Dynamic, Connected) to understand how the SDK exposes property mode transitions."
    },
    {
      "name": "RemoveMetaclassTokens.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Scripts/WIP/RemoveMetaclassTokens.cs",
      "summary": "WIP script for removing metaclass tokens from rule text. Strips CSS metaclass references while preserving rule structure."
    },
    {
      "name": "RemoveMetaclassTokensTest.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Scripts/Test/RemoveMetaclassTokensTest.cs",
      "summary": "Test script for the RemoveMetaclassTokens. Tests metaclass token removal from rule text with format preservation."
    },
    {
      "name": "RenameDataTest.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Scripts/Test/RenameDataTest.cs",
      "summary": "Test script for data renaming operations. Validates rename of constants, variables, and other project data items with rule reference updates."
    },
    {
      "name": "ReplaceWithGroupConstants.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Scripts/WIP/ReplaceWithGroupConstants.cs",
      "summary": "WIP script that replaces literal values in rules with group constant references. Supports preview and selective application."
    },
    {
      "name": "ReplaceWithGroupConstantsTest.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Scripts/Test/ReplaceWithGroupConstantsTest.cs",
      "summary": "Test script for the ReplaceWithGroupConstants. Validates replacement of literal values with group constant references in rules."
    },
    {
      "name": "RestoreAdministratorsPrivileges.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Scripts/Dev/RestoreAdministratorsPrivileges.cs",
      "summary": "Dev script that restores administrator privileges for DriveWorks team/user configurations that may have been inadvertently modified."
    },
    {
      "name": "RestoreAdministratorsPrivilegesTest.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Scripts/Test/RestoreAdministratorsPrivilegesTest.cs",
      "summary": "Test script for the RestoreAdministratorsPrivileges."
    },
    {
      "name": "RoundTripParityGateTest.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Scripts/Test/RoundTripParityGateTest.cs",
      "summary": "Test script for the SelfParityGate. Validates round-trip parity evaluation between SDK and TOML/archive snapshots."
    },
    {
      "name": "RuleDiagnosticTest.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Scripts/Test/RuleDiagnosticTest.cs",
      "summary": "Test script for rule diagnostic functionality. Tests error detection, root cause analysis, and diagnostic result formatting."
    },
    {
      "name": "RuleErrorRootCauseTest.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Scripts/Test/RuleErrorRootCauseTest.cs",
      "summary": "Test script for rule error root cause analysis. Validates chain detection from surface errors back to root cause rules."
    },
    {
      "name": "RunAllTestScripts.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Scripts/Test/RunAllTestScripts.cs",
      "summary": "Meta-test script that discovers and runs all other test scripts in sequence. Aggregates pass/fail results into a summary table."
    },
    {
      "name": "SemanticIconRegistryTest.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Scripts/Test/SemanticIconRegistryTest.cs",
      "summary": "Test script for the semantic icon registry. Validates icon key resolution, candidate validation, and embedded resource availability."
    },
    {
      "name": "SetFormMetadata.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Scripts/WIP/SetFormMetadata.cs",
      "summary": "WIP script for setting form metadata properties (data-metadata attributes) on form controls in bulk."
    },
    {
      "name": "SetFormMetadataTest.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Scripts/Test/SetFormMetadataTest.cs",
      "summary": "Test script for the SetFormMetadata. Tests form metadata property assignment and validation."
    },
    {
      "name": "SetupCutEstimate.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Scripts/Release/SetupCutEstimate.cs",
      "summary": "Release script for setting up cut estimate profile tables. Configures header properties, profile rows, and table structure for manufacturing estimation."
    },
    {
      "name": "SetupCutEstimateTest.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Scripts/Test/SetupCutEstimateTest.cs",
      "summary": "Test script for the SetupCutEstimate. Validates cut estimate profile table configuration and row generation."
    },
    {
      "name": "SetupGitRepository.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Scripts/VersionControl/SetupGitRepository.cs",
      "summary": "Version control script for initializing a git repository for the group, configuring export paths, and creating the initial commit."
    },
    {
      "name": "SyncThreeDEnvironment.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Scripts/Release/SyncThreeDEnvironment.cs",
      "summary": "Release script for synchronizing 3D document environment settings across the project. Ensures consistency of 3D rendering configuration."
    },
    {
      "name": "SyncThreeDEnvironmentTest.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Scripts/Test/SyncThreeDEnvironmentTest.cs",
      "summary": "Test script for the SyncThreeDEnvironment. Validates 3D environment setting synchronization."
    },
    {
      "name": "SystemsTest.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Scripts/Test/SystemsTest.cs",
      "summary": "Integration test script for system-level operations. Tests end-to-end workflows spanning multiple toolkit subsystems."
    },
    {
      "name": "TableFromFormControlType.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Scripts/Release/TableFromFormControlType.cs",
      "summary": "Release script that generates a summary table of all form controls grouped by type, showing properties, counts, and configuration status."
    },
    {
      "name": "TableFromFormControlTypeTest.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Scripts/Test/TableFromFormControlTypeTest.cs",
      "summary": "Test script for the TableFromFormControlType. Validates form control type summary table generation."
    },
    {
      "name": "TableFromSlabPackingSettings.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Scripts/Release/TableFromSlabPackingSettings.cs",
      "summary": "Release script generating a configuration table from slab packing settings for manufacturing review."
    },
    {
      "name": "TableFromSlabPackingSettingsTest.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Scripts/Test/TableFromSlabPackingSettingsTest.cs",
      "summary": "Test script for the TableFromSlabPackingSettings. Validates slab packing settings table generation."
    },
    {
      "name": "TextStringCandidateScannerTest.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Scripts/Test/TextStringCandidateScannerTest.cs",
      "summary": "Test script for the TextStringCandidateScanner self-test. Validates string candidate scanning in rule text."
    },
    {
      "name": "TextStringsCandidates.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Scripts/WIP/TextStringsCandidates.cs",
      "summary": "WIP script that scans rules for text string candidates that could be externalized to group tables for localization or centralization."
    },
    {
      "name": "TomlRoundTripTest.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Scripts/Test/TomlRoundTripTest.cs",
      "summary": "Comprehensive test script for TOML round-trip serialization. Tests project and group data serialization/deserialization with delta and full snapshot modes."
    },
    {
      "name": "UndoApiTest.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Scripts/Test/UndoApiTest.cs",
      "summary": "Test script for the undo API. Tests undo operations for create, delete, update, and rename of project data items."
    },
    {
      "name": "UnreferencedData.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Scripts/Release/UnreferencedData.cs",
      "summary": "Release script that finds unreferenced project data items (constants, variables, macros) not used in any rule or form control, with indirect reference detection."
    },
    {
      "name": "UnreferencedFiles.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Scripts/WIP/UnreferencedFiles.cs",
      "summary": "WIP script that detects unreferenced files in the project content folder, checking for orphaned images, documents, and other assets."
    },
    {
      "name": "UnreferencedFilesTest.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Scripts/Test/UnreferencedFilesTest.cs",
      "summary": "Test script for the UnreferencedFiles. Validates detection of unreferenced files and indirect reference analysis."
    },
    {
      "name": "UpdateDataTest.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Scripts/Test/UpdateDataTest.cs",
      "summary": "Test script for data update operations. Tests value and rule modification for constants, variables, and other project data items."
    },
    {
      "name": "VerifySetUserGroup.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Scripts/WIP/VerifySetUserGroup.cs",
      "summary": "WIP script for verifying and setting user/group privileges in DriveWorks team configuration."
    },
    {
      "name": "VerifySetUserGroupTest.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Scripts/Test/VerifySetUserGroupTest.cs",
      "summary": "Test script for the VerifySetUserGroup. Tests user/group privilege verification and assignment."
    },
    {
      "name": "WebFormCssReference.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Scripts/Dev/WebFormCssReference.cs",
      "summary": "Dev script that analyzes CSS references in web forms, listing which stylesheets and selectors are used by form controls."
    },
    {
      "name": "WebView2Diagnostics.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Scripts/Dev/WebView2Diagnostics.cs",
      "summary": "Dev diagnostic script for WebView2 runtime. Checks installation, version, and rendering capabilities of the embedded browser."
    },
    {
      "name": "WebView2DiagnosticsTest.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Scripts/Test/WebView2DiagnosticsTest.cs",
      "summary": "Test script for the WebView2Diagnostics."
    }
  ],
  "webview-ui": [
    {
      "name": "body-shell.scriban.html",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/_shared/partials/body-shell.scriban.html",
      "summary": "Scriban partial providing the WebView body shell wrapper with main landmark element and {{ content }} injection point."
    },
    {
      "name": "bridge.js",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/_shared/js/bridge.js",
      "summary": "WebView2 bridge module providing postMessage-based communication helpers. Wraps chrome.webview.postMessage with action-based envelope formatting."
    },
    {
      "name": "bridge.v1.js",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/_shared/bridge.v1.js",
      "summary": "WebView2 bridge library (v1) providing postMessage-based communication between web UI and C# host. Supports action-based messaging with request/reply patterns."
    },
    {
      "name": "button.css",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/_shared/css/button.css",
      "summary": "Styles for .button, .button-primary, .icon-button with accent color, disabled states, hover/active transitions."
    },
    {
      "name": "button.js",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/_shared/js/button.js",
      "summary": "Shared button component for WebView UI. Provides styled button creation with icon support and click handling."
    },
    {
      "name": "button.scriban.html",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/_shared/partials/button.scriban.html",
      "summary": "Scriban partial for a button element supporting variant (primary/danger/success), icon, disabled state, and extra attributes."
    },
    {
      "name": "cache-explorer.css",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/_shared/css/cache-explorer.css",
      "summary": "Styles for the group data cache explorer tree with grid-based cache nodes, copy actions, and mini buttons."
    },
    {
      "name": "cmp-count-badges.scriban.html",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/ProjectComparison/partials/cmp-count-badges.scriban.html",
      "summary": "Scriban partial rendering a total change count badge and a stacked bar showing added/removed/modified/moved/renamed proportions using flex-based segments."
    },
    {
      "name": "cmp-detail.scriban.html",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/ProjectComparison/partials/cmp-detail.scriban.html",
      "summary": "Scriban partial rendering the comparison detail pane with type-specific layouts for variables, settings, renames, form control moves, and side-only entries. Displays before/after values and known limitation notes."
    },
    {
      "name": "cmp-filter-types.scriban.html",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/ProjectComparison/partials/cmp-filter-types.scriban.html",
      "summary": "Scriban partial rendering a checkbox list of change type filters for the comparison view, allowing users to show/hide specific data types."
    },
    {
      "name": "cmp-tree-node.scriban.html",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/ProjectComparison/partials/cmp-tree-node.scriban.html",
      "summary": "Recursive Scriban partial rendering a tree node with expand/collapse twisty, label, count badges, and nested children. Used for the hierarchical change tree in the comparison view."
    },
    {
      "name": "cmp-unified-shell.scriban.html",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/ProjectComparison/partials/cmp-unified-shell.scriban.html",
      "summary": "Main Scriban shell template for the unified project comparison view. Composes header with revision labels, search/filter bar with navigation, tree/detail workspace, and status bar. Handles error states and server-side rendering of initial tree and detail."
    },
    {
      "name": "components.css",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/_shared/css/components.css",
      "summary": "Shared UI component styles covering buttons (primary, danger, success), icons, inputs, selects, textareas, labels, and notices using CSS custom property design tokens."
    },
    {
      "name": "context-header-strip.scriban.html",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/_shared/partials/context-header-strip.scriban.html",
      "summary": "Scriban partial rendering a feature context header strip with configurable CSS class and inner HTML content."
    },
    {
      "name": "context-strip.css",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/_shared/css/context-strip.css",
      "summary": "Styles for feature header/context strips used across Version Control (vc3), Rule Analysis (ra3), and Spelling (scm3) sections."
    },
    {
      "name": "create-metaclass.app.js",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/CreateMetaclass/create-metaclass.app.js",
      "summary": "WebView application for creating new CSS metaclass tokens. Provides a form for defining metaclass name, selector, compatible controls, and group assignment."
    },
    {
      "name": "create-metaclass.body.scriban.html",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/CreateMetaclass/create-metaclass.body.scriban.html",
      "summary": "Scriban HTML template for the Create Metaclass WebView body. Contains the form layout for metaclass definition."
    },
    {
      "name": "create-metaclass.css",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/CreateMetaclass/create-metaclass.css",
      "summary": "Stylesheet for the Create Metaclass WebView page. Styles the metaclass creation form with design token variables."
    },
    {
      "name": "CreateMetaclassWebViewPageBuilder.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebView/CreateMetaclassWebViewPageBuilder.cs",
      "summary": "WebView page builder for the Create Metaclass feature. Loads assets, builds the HTML page, and handles bridge messages for metaclass creation."
    },
    {
      "name": "dialogue-footer.css",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/_shared/css/dialogue-footer.css",
      "summary": "Minimal styles for dialogue footer panels used in modal-like WebView interactions."
    },
    {
      "name": "document.scriban.html",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/_shared/templates/document.scriban.html",
      "summary": "Scriban HTML template for rendering a full document page wrapper shared across WebView features."
    },
    {
      "name": "dom.js",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/_shared/js/dom.js",
      "summary": "DOM utility helpers for WebView UI. Provides element creation, class manipulation, and event binding utilities."
    },
    {
      "name": "empty-state.scriban.html",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/_shared/partials/empty-state.scriban.html",
      "summary": "Scriban partial for an empty state display with title, message, and optional primary action button."
    },
    {
      "name": "eslint.config.cjs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/eslint.config.cjs",
      "summary": "ESLint configuration for the WebAssets JavaScript codebase. Configures linting rules for WebView UI scripts."
    },
    {
      "name": "events.js",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/_shared/js/events.js",
      "summary": "Event system for WebView UI components. Provides publish/subscribe event bus for decoupled component communication."
    },
    {
      "name": "expansion-caret.scriban.html",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/_shared/partials/expansion-caret.scriban.html",
      "summary": "Scriban partial rendering a chevron-right caret icon used for expandable sections and tree toggles."
    },
    {
      "name": "explorer-block.scriban.html",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/_shared/partials/explorer-block.scriban.html",
      "summary": "Scriban partial for a titled sidebar explorer block with optional collapsible header toggle, tools area, and body content."
    },
    {
      "name": "explorer-section-header.scriban.html",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/_shared/partials/explorer-section-header.scriban.html",
      "summary": "Scriban partial for an explorer section header row with title and optional tools area."
    },
    {
      "name": "file-path-field-template.scriban.html",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/_shared/partials/file-path-field-template.scriban.html",
      "summary": "Scriban partial for a file path input field template used in export and configuration forms."
    },
    {
      "name": "form-field-checkbox-help.scriban.html",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/_shared/partials/form-field-checkbox-help.scriban.html",
      "summary": "Scriban partial for a checkbox form field with help text segments and inline code examples."
    },
    {
      "name": "form-field-input.scriban.html",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/_shared/partials/form-field-input.scriban.html",
      "summary": "Scriban partial for a labeled text input form field with optional validation error display."
    },
    {
      "name": "form-field-textarea.scriban.html",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/_shared/partials/form-field-textarea.scriban.html",
      "summary": "Scriban partial for a labeled textarea form field with configurable rows and spellcheck option."
    },
    {
      "name": "foundation.css",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/_shared/css/foundation.css",
      "summary": "CSS reset and foundation styles establishing box-sizing, typography defaults, focus-visible outlines, and visually-hidden utility classes."
    },
    {
      "name": "group-constant-picker-group.scriban.html",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/GroupConstantPicker/partials/group-constant-picker-group.scriban.html",
      "summary": "Scriban partial template rendering a collapsible group of group constants with a summary showing count and description, iterating items via the token partial."
    },
    {
      "name": "group-constant-picker-right-panel.scriban.html",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/GroupConstantPicker/partials/group-constant-picker-right-panel.scriban.html",
      "summary": "Scriban partial template for the right detail panel showing selected constant name, value, category, comment, and inserted formula preview."
    },
    {
      "name": "group-constant-picker-token.scriban.html",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/GroupConstantPicker/partials/group-constant-picker-token.scriban.html",
      "summary": "Scriban partial template for an individual group constant token row with favorite toggle, name, and value preview. Carries data attributes for selection and insertion."
    },
    {
      "name": "group-constant-picker.app.js",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/GroupConstantPicker/group-constant-picker.app.js",
      "summary": "WebView application for the Group Constant picker used in the Rules Builder. Provides search, category filtering, and constant selection for rule insertion."
    },
    {
      "name": "group-constant-picker.body.scriban.html",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/GroupConstantPicker/group-constant-picker.body.scriban.html",
      "summary": "Scriban HTML template for the Group Constant Picker WebView body."
    },
    {
      "name": "group-constant-picker.css",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/GroupConstantPicker/group-constant-picker.css",
      "summary": "Stylesheet for the Group Constant Picker WebView page."
    },
    {
      "name": "group-constants-left-panel.scriban.html",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/GroupConstants/partials/group-constants-left-panel.scriban.html",
      "summary": "Scriban partial template for the Group Constants left sidebar panel showing category navigation."
    },
    {
      "name": "group-constants.app.js",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/GroupConstants/group-constants.app.js",
      "summary": "WebView application for the Group Constants management page. Provides full CRUD interface with category management, search, import/export, and inline editing."
    },
    {
      "name": "group-constants.body.scriban.html",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/GroupConstants/group-constants.body.scriban.html",
      "summary": "Scriban HTML template for the Group Constants management WebView body. Contains the table layout, edit panels, and action buttons."
    },
    {
      "name": "group-constants.css",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/GroupConstants/group-constants.css",
      "summary": "Stylesheet for the Group Constants management WebView page. Styles the CRUD table, edit panels, and category sidebar."
    },
    {
      "name": "GroupConstantPickerWebViewPageBuilder.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebView/GroupConstantPickerWebViewPageBuilder.cs",
      "summary": "WebView page builder for the Group Constant picker used in the Rules Builder. Loads assets and builds the HTML page with bridge actions for constant selection."
    },
    {
      "name": "GroupConstantsPrefsBootstrap.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebView/GroupConstantsPrefsBootstrap.cs",
      "summary": "Bootstrap helper that serializes user preferences (favorites, recents) for the Group Constants WebView page initialization."
    },
    {
      "name": "GroupConstantsReadOnlyWebViewState.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebView/GroupConstantsReadOnlyWebViewState.cs",
      "summary": "Read-only state model for the Group Constants WebView. Provides serialized constant data, categories, and UI preferences for the web UI."
    },
    {
      "name": "GroupConstantsWebViewPageBuilder.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebView/GroupConstantsWebViewPageBuilder.cs",
      "summary": "WebView page builder for the Group Constants management window. Builds the full HTML page with Scriban templates, CSS, JS, and bridge actions for CRUD operations."
    },
    {
      "name": "header-meta-pair.scriban.html",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/_shared/partials/header-meta-pair.scriban.html",
      "summary": "Scriban partial for a compact label/value metadata pair used in feature header bars."
    },
    {
      "name": "icon-button.scriban.html",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/_shared/partials/icon-button.scriban.html",
      "summary": "Scriban partial for an icon-only button with configurable icon stem, title, and optional cache scope data attribute."
    },
    {
      "name": "icon-picker-pack-group.scriban.html",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/IconPicker/partials/icon-picker-pack-group.scriban.html",
      "summary": "Scriban partial template for rendering a group of icon packs in the picker."
    },
    {
      "name": "icon-picker-tile.scriban.html",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/IconPicker/partials/icon-picker-tile.scriban.html",
      "summary": "Scriban partial template for rendering a single icon tile in the picker grid."
    },
    {
      "name": "icon-picker.app.js",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/IconPicker/icon-picker.app.js",
      "summary": "WebView application for the icon picker. Provides icon grid display with pack filtering, search, colour selection, favorites, and SVG preview."
    },
    {
      "name": "icon-picker.body.scriban.html",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/IconPicker/icon-picker.body.scriban.html",
      "summary": "Scriban HTML template for the Icon Picker WebView body. Contains the icon grid, pack tabs, and colour picker."
    },
    {
      "name": "icon-picker.css",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/IconPicker/icon-picker.css",
      "summary": "Stylesheet for the Icon Picker WebView page. Styles the icon grid, pack tabs, colour picker, and favorites."
    },
    {
      "name": "IconPickerPrefsBootstrap.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebView/IconPickerPrefsBootstrap.cs",
      "summary": "Bootstrap helper that serializes icon picker user preferences (favorites, recents, colour) for WebView initialization."
    },
    {
      "name": "IconPickerWebViewPageBuilder.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebView/IconPickerWebViewPageBuilder.cs",
      "summary": "WebView page builder for the Icon Picker. Loads assets and builds the HTML page with icon pack data and bridge actions."
    },
    {
      "name": "index.html",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/UiPrototype/index.html",
      "summary": "Standalone HTML prototype page for UI design exploration. Used for developing and testing WebView UI components outside DriveWorks."
    },
    {
      "name": "layout.css",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/_shared/css/layout.css",
      "summary": "Page layout grid styles defining the shell, sidebar, content, and workspace areas with collapsible tree panel support and reduced-motion media queries."
    },
    {
      "name": "mc-picker-header.scriban.html",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/_shared/partials/mc-picker-header.scriban.html",
      "summary": "Scriban partial for the metaclass picker header component used in form styling metaclass selection."
    },
    {
      "name": "metaclass-picker-group.scriban.html",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/MetaclassPicker/partials/metaclass-picker-group.scriban.html",
      "summary": "Scriban partial template rendering a collapsible group of metaclass tokens with optional subgroup headers and descriptions, iterating items via the token partial."
    },
    {
      "name": "metaclass-picker-right-panel.scriban.html",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/MetaclassPicker/partials/metaclass-picker-right-panel.scriban.html",
      "summary": "Scriban partial template for the right detail panel showing selected metaclass display name, parameter input, inserted value, group/subgroup info, description, and compatible controls."
    },
    {
      "name": "metaclass-picker-token.scriban.html",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/MetaclassPicker/partials/metaclass-picker-token.scriban.html",
      "summary": "Scriban partial template for an individual metaclass token row with favorite toggle, name, description, and rich data attributes for group/subgroup/controls/parameter metadata."
    },
    {
      "name": "metaclass-picker.app.js",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/MetaclassPicker/metaclass-picker.app.js",
      "summary": "WebView application for the metaclass picker. Displays metaclass tokens grouped by category with parameterized metaclass support."
    },
    {
      "name": "metaclass-picker.body.scriban.html",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/MetaclassPicker/metaclass-picker.body.scriban.html",
      "summary": "Scriban HTML template for the Metaclass Picker WebView body."
    },
    {
      "name": "metaclass-picker.css",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/MetaclassPicker/metaclass-picker.css",
      "summary": "Stylesheet for the Metaclass Picker WebView page."
    },
    {
      "name": "MetaclassPickerPrefsBootstrap.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebView/MetaclassPickerPrefsBootstrap.cs",
      "summary": "Bootstrap helper that serializes metaclass picker user preferences for WebView initialization."
    },
    {
      "name": "MetaclassPickerWebViewPageBuilder.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebView/MetaclassPickerWebViewPageBuilder.cs",
      "summary": "WebView page builder for the Metaclass Picker. Loads assets and builds the HTML page with metaclass data and bridge actions."
    },
    {
      "name": "migration-placeholder.html",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/ScriptTools/migration-placeholder.html",
      "summary": "Minimal placeholder HTML reserved for the Script Tools WebView migration. Not loaded by the application."
    },
    {
      "name": "mini-button.scriban.html",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/_shared/partials/mini-button.scriban.html",
      "summary": "Scriban partial for a compact mini button with text, optional type, id, disabled state, and data action attribute."
    },
    {
      "name": "package.json",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/package.json",
      "summary": "NPM package configuration for the WebAssets directory. Defines ESLint as a dev dependency for JavaScript linting."
    },
    {
      "name": "preview-data-table.js",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/_shared/js/preview-data-table.js",
      "summary": "Data table component with cell preview functionality for WebView UI. Renders tables with clickable cells that show expanded content in a preview pane."
    },
    {
      "name": "preview-overlay.css",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/_shared/css/preview-overlay.css",
      "summary": "Styles for the preview/mutate review table, status chips, and overlay panels used in Script Tools review and VC wireframe parity."
    },
    {
      "name": "project-comparison.app.js",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/ProjectComparison/project-comparison.app.js",
      "summary": "WebView application for the project comparison report. Renders side-by-side diff with tree navigation, change filtering, and detail panels."
    },
    {
      "name": "project-comparison.body.scriban.html",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/ProjectComparison/project-comparison.body.scriban.html",
      "summary": "Scriban HTML template for the Project Comparison WebView body."
    },
    {
      "name": "project-comparison.css",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/ProjectComparison/project-comparison.css",
      "summary": "Stylesheet for the Project Comparison WebView page. Styles the diff tree, inline diffs, and change detail panels with colour-coded change kinds."
    },
    {
      "name": "ProjectComparisonWebViewPageBuilder.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebView/ProjectComparisonWebViewPageBuilder.cs",
      "summary": "WebView page builder for the Project Comparison report. Builds the HTML page with change tree data, inline diffs, and export capabilities."
    },
    {
      "name": "prototype.css",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/UiPrototype/prototype.css",
      "summary": "Stylesheet for the UI prototype page."
    },
    {
      "name": "prototype.js",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/UiPrototype/prototype.js",
      "summary": "JavaScript for the UI prototype page. Provides mock data and interaction handlers for standalone UI testing."
    },
    {
      "name": "result-surface-host.css",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/_shared/css/result-surface-host.css",
      "summary": "Styles for the result surface host container that wraps script output displays."
    },
    {
      "name": "result-surface-mount.js",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/_shared/js/result-surface-mount.js",
      "summary": "Result surface mounting component for WebView UI. Manages the lifecycle of embedded HTML result surfaces in the script tools interface."
    },
    {
      "name": "review-filter.css",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/_shared/css/review-filter.css",
      "summary": "Styles for the review filter grid with search, status, and scope dropdown filters used in comparison and review views."
    },
    {
      "name": "rule-analysis.app.js",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/RuleAnalysis/rule-analysis.app.js",
      "summary": "WebView application for the rule analysis results page. Displays rule errors, diagnostics, and root cause chains in an interactive table."
    },
    {
      "name": "rule-analysis.body.scriban.html",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/RuleAnalysis/rule-analysis.body.scriban.html",
      "summary": "Scriban HTML template for the Rule Analysis WebView body. Contains the diagnostic results table layout."
    },
    {
      "name": "rule-analysis.css",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/RuleAnalysis/rule-analysis.css",
      "summary": "Stylesheet for the Rule Analysis WebView page."
    },
    {
      "name": "RuleDiagnosticsWebViewPageBuilder.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebView/RuleDiagnosticsWebViewPageBuilder.cs",
      "summary": "WebView page builder for the Rule Diagnostics page. Builds the HTML page with rule error data, root cause chains, and diagnostic details."
    },
    {
      "name": "run-progress-overlay.js",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/_shared/js/run-progress-overlay.js",
      "summary": "Progress overlay component for script execution. Shows animated progress with status messages during script runs."
    },
    {
      "name": "running-progress-overlay.scriban.html",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/_shared/partials/running-progress-overlay.scriban.html",
      "summary": "Scriban partial for a running progress overlay with title, step metadata, progress bar, status text, and cancel button."
    },
    {
      "name": "script-tools-content-header.scriban.html",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/ScriptTools/partials/script-tools-content-header.scriban.html",
      "summary": "Scriban partial for the script content header showing a collapsible title with icon, description, breadcrumb navigation, and a favorite toggle button."
    },
    {
      "name": "script-tools-footer-configure.scriban.html",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/ScriptTools/partials/script-tools-footer-configure.scriban.html",
      "summary": "Scriban partial for the configure-stage footer with a Test script button, group/project execution context toggle, and Run button."
    },
    {
      "name": "script-tools-footer-review-results.scriban.html",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/ScriptTools/partials/script-tools-footer-review-results.scriban.html",
      "summary": "Scriban partial for the review and results stage footers. Review footer has Apply selected with a selection blocker; results footer has Export, Undo, Clear, and Start new run buttons."
    },
    {
      "name": "script-tools-left-panel.scriban.html",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/ScriptTools/partials/script-tools-left-panel.scriban.html",
      "summary": "Scriban partial for the left sidebar containing a script explorer tree with search, collapse toggle, and a collapsible group data cache tree with refresh and options buttons."
    },
    {
      "name": "script-tools.app.js",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/ScriptTools/script-tools.app.js",
      "summary": "Main WebView application for the Script Tools UI3 interface. Implements the full script browser, configure, review, and results workflow with 2500+ lines of UI logic."
    },
    {
      "name": "script-tools.body.scriban.html",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/ScriptTools/script-tools.body.scriban.html",
      "summary": "Main Scriban body template for the Script Tools UI. Composes a left panel, workflow strip, three-stage content area (configure/review/results), cell preview strip, rule detail overlay, session output strip, and status bar."
    },
    {
      "name": "script-tools.css",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/ScriptTools/script-tools.css",
      "summary": "Comprehensive CSS stylesheet (817 lines) for the Script Tools WebView UI. Defines grid layout, stage-based footer visibility, script content header with collapsible description, data grid styling, cell preview strip, and responsive panel sizing using CSS custom properties."
    },
    {
      "name": "script-tree-sidebar.css",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/_shared/css/script-tree-sidebar.css",
      "summary": "Styles for the script/cache tree sidebar with collapsible group headings, script rows, and category icons."
    },
    {
      "name": "script-workflow.css",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/_shared/css/script-workflow.css",
      "summary": "Styles for the Script Tools workflow strip with tab-underline stages (Configure/Review/Results), phase tools, and step navigation."
    },
    {
      "name": "ScriptToolsBridgeActions.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebView/ScriptToolsBridgeActions.cs",
      "summary": "Defines bridge action strings for the Script Tools WebView. Maps action names between the C# host and JavaScript client for script execution, input handling, and result display."
    },
    {
      "name": "ScriptToolsWebViewPageBuilder.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebView/ScriptToolsWebViewPageBuilder.cs",
      "summary": "WebView page builder for the Script Tools UI3 interface. Builds the HTML page with script catalog, input schema, and execution state."
    },
    {
      "name": "search-field.css",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/_shared/css/search-field.css",
      "summary": "Styles for the shared search field component with icon, input, and clear button used across tree sidebars and filter bars."
    },
    {
      "name": "search-field.js",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/_shared/js/search-field.js",
      "summary": "Search field component for WebView UI. Provides debounced search input with clear button and result filtering."
    },
    {
      "name": "search-field.scriban.html",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/_shared/partials/search-field.scriban.html",
      "summary": "Scriban partial for a search field component with icon, placeholder, and configurable CSS classes."
    },
    {
      "name": "section-title.css",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/_shared/css/section-title.css",
      "summary": "Styles for section title headings used across WebView panels."
    },
    {
      "name": "session-output-strip.css",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/_shared/css/session-output-strip.css",
      "summary": "Styles for the session output strip showing log messages with expandable panel and summary line."
    },
    {
      "name": "session-output-strip.js",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/_shared/js/session-output-strip.js",
      "summary": "Session output strip component showing script run log lines. Displays timestamped output messages in a scrollable strip."
    },
    {
      "name": "session-output-strip.scriban.html",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/_shared/partials/session-output-strip.scriban.html",
      "summary": "Scriban partial for a collapsible session log strip with summary text and expandable log panel."
    },
    {
      "name": "sidebar-view-panes.css",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/_shared/css/sidebar-view-panes.css",
      "summary": "Styles for VS Code-style stacked view panes in the Script Tools left column with collapsible explorer blocks and sash dividers."
    },
    {
      "name": "sidebar-view-panes.js",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/_shared/js/sidebar-view-panes.js",
      "summary": "Sidebar view pane management component. Handles collapsible sidebar sections with view switching for the script tools interface."
    },
    {
      "name": "spell-check.app.js",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/SpellCheck/spell-check.app.js",
      "summary": "WebView application for the spell check results page. Displays misspelled words with suggestions and batch correction actions."
    },
    {
      "name": "spell-check.body.scriban.html",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/SpellCheck/spell-check.body.scriban.html",
      "summary": "Scriban HTML template for the Spell Check WebView body."
    },
    {
      "name": "spell-check.css",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/SpellCheck/spell-check.css",
      "summary": "Stylesheet for the Spell Check WebView page."
    },
    {
      "name": "statusbar.css",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/_shared/css/statusbar.css",
      "summary": "Styles for the shared status bar component with left/centre/right sections used at the bottom of WebView windows."
    },
    {
      "name": "statusbar.scriban.html",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/_shared/partials/statusbar.scriban.html",
      "summary": "Scriban partial for a footer status bar with left, centre, and right text sections."
    },
    {
      "name": "string-rows-table.scriban.html",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/_shared/partials/string-rows-table.scriban.html",
      "summary": "Scriban partial rendering a data table with configurable columns and row cells, supporting row selection attributes and custom CSS classes."
    },
    {
      "name": "token-picker-shell.js",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/_shared/js/token-picker-shell.js",
      "summary": "Token picker shell component for metaclass and group constant selection. Provides a searchable dropdown with token insertion."
    },
    {
      "name": "ToolkitDispatcherPump.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebView/ToolkitDispatcherPump.cs",
      "summary": "Utility for pumping actions onto the WPF dispatcher thread from background WebView callbacks. Ensures thread-safe UI updates."
    },
    {
      "name": "ToolkitScriptResultHtmlHelper.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebView/ToolkitScriptResultHtmlHelper.cs",
      "summary": "Helper for generating HTML representations of script results. Converts DataTables, prose, markdown, and surfaces into embedded HTML for the WebView."
    },
    {
      "name": "ToolkitWebBridgeActions.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebView/ToolkitWebBridgeActions.cs",
      "summary": "Central registry of WebView bridge action strings shared across all features. Generates the JavaScript bootstrap that exposes action names to the web UI."
    },
    {
      "name": "ToolkitWebViewHostControl.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebView/ToolkitWebViewHostControl.cs",
      "summary": "WPF control that hosts a WebView2 instance with bridge message handling, asset loading, and lifecycle management. Core hosting component for all WebView features."
    },
    {
      "name": "ToolkitWpfWebView2Helper.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebView/ToolkitWpfWebView2Helper.cs",
      "summary": "Helper for WebView2 initialization and configuration in WPF. Handles WebView2 runtime discovery, virtual host mapping, and dev tools configuration."
    },
    {
      "name": "tree-collapsed-tag.scriban.html",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/_shared/partials/tree-collapsed-tag.scriban.html",
      "summary": "Scriban partial rendering the collapsed sidebar tag showing an icon when the tree panel is minimized."
    },
    {
      "name": "tree-item.scriban.html",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/_shared/partials/tree-item.scriban.html",
      "summary": "Scriban partial for a semantic tree item (li role=treeitem) with label, optional expansion state, and extra classes."
    },
    {
      "name": "tree-sidebar-chrome.css",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/_shared/css/tree-sidebar-chrome.css",
      "summary": "Styles for tree sidebar chrome elements including toolbar, toggle button, and collapsed tag icon shown when the tree panel is collapsed."
    },
    {
      "name": "tree-toggle.scriban.html",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/_shared/partials/tree-toggle.scriban.html",
      "summary": "Scriban partial for a tree panel toggle button with optional custom content or default expansion caret."
    },
    {
      "name": "tree-toolbar.scriban.html",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/_shared/partials/tree-toolbar.scriban.html",
      "summary": "Scriban partial for a tree sidebar toolbar area accepting content HTML for search fields and toggle buttons."
    },
    {
      "name": "tree.css",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/_shared/css/tree.css",
      "summary": "Styles for the generic tree component with expandable items, indentation, and selection states."
    },
    {
      "name": "tree.js",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/_shared/js/tree.js",
      "summary": "Tree view component for hierarchical data display. Supports expand/collapse, selection, and change-kind icons for comparison results."
    },
    {
      "name": "tree.scriban.html",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/_shared/partials/tree.scriban.html",
      "summary": "Scriban partial for a tree container (nav role=tree) with configurable ID, CSS class, and aria-labelledby."
    },
    {
      "name": "vc-changed-files-list.scriban.html",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/_shared/partials/vc-changed-files-list.scriban.html",
      "summary": "Scriban partial rendering the Version Control changed files table body with status pills, file paths, and filterable data attributes."
    },
    {
      "name": "vc-command-states.scriban.html",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/VersionControl/partials/vc-command-states.scriban.html",
      "summary": "Scriban partial that renders a list of Git command states (available/blocked) with status and detail text for each command."
    },
    {
      "name": "vc-stage-strip.scriban.html",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/VersionControl/partials/vc-stage-strip.scriban.html",
      "summary": "Scriban partial rendering the three-tab stage strip (Changes, Branches, History) for the Version Control WebView navigation."
    },
    {
      "name": "vc-tab-branches.scriban.html",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/VersionControl/partials/vc-tab-branches.scriban.html",
      "summary": "Scriban partial for the Branches tab showing branch inventory cards with sync status, plus Git operations (pull, push, merge, checkout)."
    },
    {
      "name": "vc-tab-changes.scriban.html",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/VersionControl/partials/vc-tab-changes.scriban.html",
      "summary": "Scriban partial for the Changes tab displaying a filterable table of changed files with status pills, index/worktree indicators, and a detail panel for diff viewing."
    },
    {
      "name": "vc-tab-history.scriban.html",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/VersionControl/partials/vc-tab-history.scriban.html",
      "summary": "Scriban partial for the History tab showing a filterable list of recent commits with a detail card for commit metadata (subject, hash, author, date)."
    },
    {
      "name": "version-control.app.js",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/VersionControl/version-control.app.js",
      "summary": "WebView application for the Version Control UI3 interface. Provides git status, branch management, staging, committing, and change visualization."
    },
    {
      "name": "version-control.body.html",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/VersionControl/version-control.body.html",
      "summary": "Static HTML wireframe for the Version Control WebView showing the commit workflow layout with TOML report gate, changed files list, commit draft area, and tabbed detail panels."
    },
    {
      "name": "version-control.body.scriban.html",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/VersionControl/version-control.body.scriban.html",
      "summary": "Scriban-powered dynamic template for the Version Control WebView that renders the full commit workflow with TOML report gate, changed files, commit draft, and tabbed panels (Changes/Branches/History) based on live state."
    },
    {
      "name": "version-control.css",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/VersionControl/version-control.css",
      "summary": "Comprehensive stylesheet (1100+ lines) for the Version Control WebView covering layout, header bar, sync pills, branch cards, commit area, changed files table, diff viewer, history list, and responsive design tokens."
    },
    {
      "name": "VersionControlWebViewPageBuilder.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebView/VersionControlWebViewPageBuilder.cs",
      "summary": "WebView page builder for the Version Control UI3 interface. Builds the HTML page with git state, branch data, and change lists."
    },
    {
      "name": "VersionControlWebViewState.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebView/VersionControlWebViewState.cs",
      "summary": "State model for the Version Control WebView. Tracks repository status, branches, changed files, recent commits, and TOML report gate."
    },
    {
      "name": "webview-client-errors.js",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/_shared/js/webview-client-errors.js",
      "summary": "Client-side error reporting for WebView UI. Captures unhandled errors and reports them to the C# host via the bridge."
    },
    {
      "name": "WebView2BridgeV1.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebView/WebView2BridgeV1.cs",
      "summary": "C# side of the WebView2 bridge v1 protocol. Handles message deserialization, action dispatching, and reply serialization."
    },
    {
      "name": "WebViewAssetLoader.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebView/WebViewAssetLoader.cs",
      "summary": "Asset loader for WebView pages. Loads CSS, JavaScript, and Scriban HTML templates from the WebAssets directory structure with error handling."
    },
    {
      "name": "WebViewClientErrorBridge.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebView/WebViewClientErrorBridge.cs",
      "summary": "Bridge for receiving client-side JavaScript errors from WebView. Logs errors to the toolkit diagnostics system."
    },
    {
      "name": "WebViewDevToolsConsoleHook.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebView/WebViewDevToolsConsoleHook.cs",
      "summary": "Hook for WebView2 dev tools console. Captures console messages for debug logging in development builds."
    },
    {
      "name": "WebViewPageBuilderHelper.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebView/WebViewPageBuilderHelper.cs",
      "summary": "Shared helper for WebView page builders. Provides error page rendering and common HTML scaffolding."
    },
    {
      "name": "WebViewProfilePaths.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebView/WebViewProfilePaths.cs",
      "summary": "Manages WebView2 user profile paths. Configures separate profile directories for different WebView features to isolate state."
    },
    {
      "name": "workflow-strip.css",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/_shared/css/workflow-strip.css",
      "summary": "Minimal styles for the workflow strip container used as a base for stage navigation."
    },
    {
      "name": "workflow-strip.js",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/_shared/js/workflow-strip.js",
      "summary": "Workflow strip component showing the configure/review/results stage flow. Highlights the current stage in the script execution workflow."
    },
    {
      "name": "workflow-strip.scriban.html",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/WebAssets/_shared/partials/workflow-strip.scriban.html",
      "summary": "Scriban partial for the Script Tools workflow strip with three stages (Configure/Review/Results), help panel, and subtext toggle."
    }
  ],
  "wpf-views": [
    {
      "name": "ActionButtonControl.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Controls/ActionButtonControl.cs",
      "summary": "WPF control providing an action button with configurable icon and size, used in toolbar and script browser surfaces."
    },
    {
      "name": "AutexToolsWindow.xaml",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Views/AutexToolsWindow.xaml",
      "summary": "XAML layout for the main Autex Tools window. Hosts the script browser, runner, and shell views in a tabbed interface."
    },
    {
      "name": "AutexToolsWindow.xaml.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Views/AutexToolsWindow.xaml.cs",
      "summary": "Code-behind for the main Autex Tools window. Initializes the script browser, runner pages, and manages the window lifecycle."
    },
    {
      "name": "CopySourceOverlayButton.xaml",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Views/CopySourceOverlayButton.xaml",
      "summary": "XAML for a small overlay button used in the copy-source workflow. Provides a floating action button on table rows."
    },
    {
      "name": "CopySourceOverlayButton.xaml.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Views/CopySourceOverlayButton.xaml.cs",
      "summary": "Code-behind for the copy source overlay button. Handles click events for initiating copy operations from table rows."
    },
    {
      "name": "GroupConstantEditDialog.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Views/GroupConstantEditDialog.cs",
      "summary": "Simple dialog for editing a single group constant's name, value, and category."
    },
    {
      "name": "GroupConstantsWindow.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Views/GroupConstantsWindow.cs",
      "summary": "WPF window for managing Group Constants with categories. Primary UI is WebView2-based, hosted via ToolkitWebViewHostControl with bridge message handling for CRUD operations."
    },
    {
      "name": "GroupConstantsWindow.xaml",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Views/GroupConstantsWindow.xaml",
      "summary": "XAML layout for the Group Constants window. Contains the WebView2 host control and chrome elements."
    },
    {
      "name": "InputBoxWindow.xaml",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Views/InputBoxWindow.xaml",
      "summary": "XAML for a simple input dialog window with text entry, OK/Cancel buttons."
    },
    {
      "name": "InputBoxWindow.xaml.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Views/InputBoxWindow.xaml.cs",
      "summary": "Code-behind for the input dialog window. Returns the entered text via a dialog result."
    },
    {
      "name": "RuleAnalysisResultsWindow.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Views/RuleAnalysisResultsWindow.cs",
      "summary": "WPF window for displaying rule analysis results. Shows error diagnostics, root cause chains, and suggested fixes in a data grid."
    },
    {
      "name": "ScriptBrowserPage.xaml",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Views/ScriptBrowserPage.xaml",
      "summary": "XAML layout for the script browser page. Contains category tabs, script cards grid, description panel, and input controls."
    },
    {
      "name": "ScriptBrowserPage.xaml.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Views/ScriptBrowserPage.xaml.cs",
      "summary": "Code-behind for the script browser page. Manages script card display, category filtering, input control generation, and run command routing."
    },
    {
      "name": "ScriptRunnerPage.xaml",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Views/ScriptRunnerPage.xaml",
      "summary": "XAML layout for the script runner page. Contains progress indicators, result table, and action buttons."
    },
    {
      "name": "ScriptRunnerPage.xaml.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Views/ScriptRunnerPage.xaml.cs",
      "summary": "Code-behind for the script runner page. Manages script execution, progress reporting, result table display, and apply/select-and-continue workflows."
    },
    {
      "name": "ScriptShellView.WebViewBridge.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Views/ScriptShellView.WebViewBridge.cs",
      "summary": "WebView2 bridge for the Script Tools shell view. Handles postMessage communication between the C# host and the script-tools web UI, including state updates, run commands, and result rendering."
    },
    {
      "name": "ScriptShellView.xaml",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Views/ScriptShellView.xaml",
      "summary": "XAML layout for the Script Tools shell view. Hosts the WebView2 control for the script tools UI3 interface."
    },
    {
      "name": "ScriptShellView.xaml.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Views/ScriptShellView.xaml.cs",
      "summary": "Code-behind for the Script Tools shell view. Initializes the WebView2 host, manages the script tools page lifecycle, and coordinates between browser and runner pages."
    },
    {
      "name": "SharedDiagnosticResultsPanel.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Views/SharedDiagnosticResultsPanel.cs",
      "summary": "Shared WPF panel for displaying diagnostic results (rule errors, naming issues) reused across multiple views."
    },
    {
      "name": "SpellCheckResultsWindow.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Views/SpellCheckResultsWindow.cs",
      "summary": "WPF window for displaying spell check results. Shows misspelled words, suggestions, and allows batch corrections."
    },
    {
      "name": "ToolkitWebViewChromeForm.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Views/ToolkitWebViewChromeForm.cs",
      "summary": "WinForms form hosting a WebView2 control with custom chrome (title bar, status bar) for toolkit WebView pages outside the main WPF shell."
    },
    {
      "name": "VcShellView.xaml",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Views/VcShellView.xaml",
      "summary": "XAML layout for the Version Control shell view. Hosts the WebView2 control for the version control UI3 interface."
    },
    {
      "name": "VcShellView.xaml.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Views/VcShellView.xaml.cs",
      "summary": "Code-behind for the Version Control shell view. Manages WebView2 initialization, git operations, and state synchronization with the version control web UI."
    },
    {
      "name": "VersionControlWindow.xaml",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Views/VersionControlWindow.xaml",
      "summary": "XAML layout for the Version Control standalone window. Wraps the VcShellView in a window container."
    },
    {
      "name": "VersionControlWindow.xaml.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Views/VersionControlWindow.xaml.cs",
      "summary": "Code-behind for the Version Control window. Manages window lifecycle and delegates to VcShellView."
    }
  ],
  "rules-builder": [
    {
      "name": "AutexFormDesignerApplicationResolver.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/FormDesigner/FormDesignerApplicationResolver.cs",
      "summary": "Resolves the DriveWorks application instance for form designer integration. Provides the IApplication reference needed by form designer extensions."
    },
    {
      "name": "AutexFormDesignerDebugLog.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/FormDesigner/FormDesignerDebugLog.cs",
      "summary": "Debug logging helper for form designer integration. Writes diagnostic output during form designer extension development."
    },
    {
      "name": "AutexFormMetadataDynamicPropertyRegistration.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/FormDesigner/FormMetadataDynamicPropertyRegistration.cs",
      "summary": "Registers Autex metadata as dynamic properties on form controls in the form designer. Enables the Metadata property to appear in the property grid."
    },
    {
      "name": "AutexFormMetadataPropertyDescriptor.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/FormDesigner/FormMetadataPropertyDescriptor.cs",
      "summary": "Custom TypeDescriptor for the Autex Metadata property on form controls. Provides property grid integration with get/set operations."
    },
    {
      "name": "AutexFormMetadataPropertyEditor.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/FormDesigner/FormMetadataPropertyEditor.cs",
      "summary": "Property editor for the Autex Metadata property in the form designer property grid."
    },
    {
      "name": "AutexGridDriveWorksPropertyUiResources.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/FormDesigner/GridDriveWorksPropertyUiResources.cs",
      "summary": "UI resources for the Autex grid DriveWorks property editor. Provides localized strings and icons for the property grid."
    },
    {
      "name": "AutexGridPropertyValueUiInjection.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/FormDesigner/GridPropertyValueUiInjection.cs",
      "summary": "Injects custom value UI into the form designer property grid for Autex-extended properties."
    },
    {
      "name": "AutexGridRulesBuilderInterop.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/FormDesigner/GridRulesBuilderInterop.cs",
      "summary": "Interop bridge between the form designer property grid and the Autex Rules Builder for rule editing on form control properties."
    },
    {
      "name": "AutexGridUIProviderTypeDescriptor.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/FormDesigner/GridUIProviderTypeDescriptor.cs",
      "summary": "Custom TypeDescriptor for the form designer grid UI provider. Intercepts property descriptors to inject Autex custom editors."
    },
    {
      "name": "AutexIconCatalogProvider.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/RulesBuilder/AutexIconCatalogProvider.cs",
      "summary": "Provides the icon catalog for the Autex icon picker in the Rules Builder. Loads icon packs and items via reflection against the AutexCustom extender assembly, with data-URI and SVG preview caching."
    },
    {
      "name": "AutexIconPickerWindow.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/RulesBuilder/AutexIconPickerWindow.cs",
      "summary": "WPF dialog window for the legacy Autex icon picker in the Rules Builder. Displays icon packs in a grid with search, colour filtering, and selection."
    },
    {
      "name": "AutexLabelWebTechControlAdapter.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/FormDesigner/AutexLabelWebTechControlAdapter.cs",
      "summary": "Adapter for Label controls in the WebTech form designer. Customizes rendering and property handling for Autex-styled labels."
    },
    {
      "name": "AutexLayoutGridDynamicPropertyRegistration.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/FormDesigner/LayoutGridDynamicPropertyRegistration.cs",
      "summary": "Registers Row and Column as dynamic properties on form controls for the Autex layout grid system in the form designer."
    },
    {
      "name": "AutexLayoutGridMetadataContract.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/FormDesigner/LayoutGridMetadataContract.cs",
      "summary": "Contract definitions for Autex layout grid metadata. Defines Row/Column property names and metadata keys used across the layout grid system."
    },
    {
      "name": "ChangeFormControlTypeAction.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/FormDesigner/ChangeFormControlTypeAction.cs",
      "summary": "Converts a form control to another type within supported groups. Handles property capture, control deletion, creation, and property re-application. Used by form designer context menu."
    },
    {
      "name": "CreateMetaclassWindow.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/FormDesigner/CreateMetaclassWindow.cs",
      "summary": "WebView2-based dialog for creating CSS metaclass tokens from form control properties. Parses ProjectStyles.css, shows existing tokens, and generates new metaclass entries."
    },
    {
      "name": "FormDesignerGridPropertyInjection.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/FormDesigner/FormDesignerGridPropertyInjection.cs",
      "summary": "Injects custom property descriptors into the form designer property grid. Adds Autex-specific properties like Metadata and layout grid Row/Column."
    },
    {
      "name": "FormDesignerInspectCdpLog.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/FormDesigner/FormDesignerInspectCdpLog.cs",
      "summary": "Debug utility for inspecting Chrome DevTools Protocol (CDP) log messages from the form designer WebView2."
    },
    {
      "name": "FormDesignerWebLayoutBridgeInjection.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/FormDesigner/FormDesignerWebLayoutBridgeInjection.cs",
      "summary": "Injects layout grid CSS and JS bridge into the Form Designer WebView2. Handles adorner geometry, theme bootstrap, and postMessage communication for layout grid integration."
    },
    {
      "name": "GroupConstantRuleFormula.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/RulesBuilder/GroupConstantRuleFormula.cs",
      "summary": "Helper for building DriveWorks rule formulas that reference Group Constants. Provides token formatting for constant insertion in rules."
    },
    {
      "name": "GroupConstantWebPickerWindow.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/RulesBuilder/GroupConstantWebPickerWindow.cs",
      "summary": "WebView2-based picker window for inserting Group Constant references into DriveWorks rules. Replaces legacy WPF picker with a web-based UI."
    },
    {
      "name": "MetaclassWebPickerWindow.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/RulesBuilder/MetaclassWebPickerWindow.cs",
      "summary": "WebView2-based picker window for inserting CSS metaclass tokens into DriveWorks form control properties via the Rules Builder."
    },
    {
      "name": "ProjectStylesMetaclassExtractor.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/RulesBuilder/ProjectStylesMetaclassExtractor.cs",
      "summary": "Extracts metaclass records from ProjectStyles.css selectors (data-metadata attributes). Supports grouping via #region directives, parameterized metaclasses, and file caching for performance."
    },
    {
      "name": "RulesBuilderAutexIconEntryPoint.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/RulesBuilder/RulesBuilderAutexIconEntryPoint.cs",
      "summary": "Entry point that registers the Autex icon picker button in the DriveWorks Rules Builder toolbar."
    },
    {
      "name": "RulesBuilderButtonInjection.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/RulesBuilder/RulesBuilderButtonInjection.cs",
      "summary": "Injects custom buttons into the DriveWorks Rules Builder command bar via WPF class handler and reflection. Manages button registration and lifecycle across Rules Builder windows."
    },
    {
      "name": "RulesBuilderEditorAccess.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/RulesBuilder/RulesBuilderEditorAccess.cs",
      "summary": "Provides reflection-based access to the DriveWorks Rules Builder editor internals for reading/writing rule text and cursor position."
    },
    {
      "name": "RulesBuilderFormatterEntryPoint.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/RulesBuilder/RulesBuilderFormatterEntryPoint.cs",
      "summary": "Entry point that registers the rule formatter button in the DriveWorks Rules Builder toolbar."
    },
    {
      "name": "RulesBuilderGroupConstantPickerEntryPoint.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/RulesBuilder/RulesBuilderGroupConstantPickerEntryPoint.cs",
      "summary": "Entry point that registers the Group Constant picker button in the DriveWorks Rules Builder toolbar."
    },
    {
      "name": "RulesBuilderInspectEntryPoint.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/RulesBuilder/RulesBuilderInspectEntryPoint.cs",
      "summary": "Entry point that registers the rule inspection button in the DriveWorks Rules Builder toolbar."
    },
    {
      "name": "RulesBuilderMetaclassEntryPoint.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/RulesBuilder/RulesBuilderMetaclassEntryPoint.cs",
      "summary": "Entry point that registers the metaclass picker button in the DriveWorks Rules Builder toolbar. Detects picture context to show relevant metaclass options."
    },
    {
      "name": "RulesBuilderPictureContextDetector.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/RulesBuilder/RulesBuilderPictureContextDetector.cs",
      "summary": "Detects whether the current Rules Builder context is editing a picture/image control property, used to conditionally show metaclass options."
    },
    {
      "name": "RulesBuilderRuleAnalysisEntryPoint.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/RulesBuilder/RulesBuilderRuleAnalysisEntryPoint.cs",
      "summary": "Entry point that registers the rule analysis button in the DriveWorks Rules Builder toolbar for error detection and diagnostics."
    },
    {
      "name": "RulesBuilderSpellCheckEntryPoint.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/RulesBuilder/RulesBuilderSpellCheckEntryPoint.cs",
      "summary": "Entry point that registers the spell check button in the DriveWorks Rules Builder toolbar."
    },
    {
      "name": "RulesBuilderSpellingContextMenu.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/RulesBuilder/RulesBuilderSpellingContextMenu.cs",
      "summary": "Provides the context menu for spell-check suggestions in the Rules Builder editor. Shows replacement suggestions and ignore options."
    },
    {
      "name": "RulesBuilderSpellingTaggerRegistration.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/RulesBuilder/RulesBuilderSpellingTaggerRegistration.cs",
      "summary": "Registers the WPF spell-check tagger (squiggly underline adorner) for the Rules Builder editor using WPF text rendering hooks."
    },
    {
      "name": "TargetControlTypeDropdownEditor.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/FormSpecification/TargetControlTypeDropdownEditor.cs",
      "summary": "Dropdown editor for target control type selection in specification macro property editing."
    }
  ],
  "assets-and-services": [
    {
      "name": "CsvExportService.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Services/CsvExportService.cs",
      "summary": "Static service for building CSV filenames and writing DataTables to CSV files in RFC 4180 format with UTF-8 BOM encoding."
    },
    {
      "name": "en_GB.aff",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Resources/en_GB.aff",
      "summary": "Hunspell affix file for British English spelling dictionary. Defines affix rules, flag types, and compound patterns used by the spell checker."
    },
    {
      "name": "en_GB.dic",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Resources/en_GB.dic",
      "summary": "British English dictionary file used by the spelling checker. Contains 87k+ word entries for spell-check and suggestion lookups."
    },
    {
      "name": "process_disabled_icons.py",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Assets/Icons/process_disabled_icons.py",
      "summary": "Python script that converts white pixels to transparency in icon PNGs, producing disabled-state icon variants for the toolbar."
    },
    {
      "name": "RuleService.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Services/RuleService.cs",
      "summary": "Service for DriveWorks rule operations including formatting, parsing, and validation."
    },
    {
      "name": "ToolkitIconLoader.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Assets/ToolkitIconLoader.cs",
      "summary": "Static utility class that loads toolbar and script icons from embedded PNG/SVG resources, with semantic key resolution via ToolkitSemanticIconMap and data URI generation for WebView surfaces."
    },
    {
      "name": "ToolkitIconLoader.Wpf.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Assets/ToolkitIconLoader.Wpf.cs",
      "summary": "WPF-specific icon loading methods providing BitmapImage and BitmapSource conversions from the shared ToolkitIconLoader resource system."
    },
    {
      "name": "ToolkitSemanticIconMap.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Assets/ToolkitSemanticIconMap.cs",
      "summary": "Semantic icon resolution engine that maps abstract icon keys (e.g. 'play', 'source-branch') to ordered candidate resource stems loaded from SemanticIconMap.json, with validation and candidate inspection."
    },
    {
      "name": "ToolkitTheme.xaml",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Assets/ToolkitTheme.xaml",
      "summary": "WPF resource dictionary defining the Autex Toolkit theme with colors, brushes, fonts, and control styles aligned with the UI 3.0 design token system."
    }
  ],
  "build-infra": [
    {
      "name": "AutexCustomGeometryUdfTests.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Testing/AutexCustomGeometryUdfTests.cs",
      "summary": "Test script for AutexCustom geometry user-defined functions, validating geometric calculations and edge cases."
    },
    {
      "name": "AutexCustomUtilityUdfTests.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Testing/AutexCustomUtilityUdfTests.cs",
      "summary": "Test script for AutexCustom utility user-defined functions, validating string, math, and helper UDFs."
    },
    {
      "name": "Build-Release.ps1",
      "type": "file",
      "sourcePath": "Autex Toolkit/Build-Release.ps1",
      "summary": "Production release build script. Increments releaseBuild in version.json, patches AssemblyInfo, runs MSBuild Release, then deploys the DLL and dependencies to production plugin shares with archiving and rollback on failure."
    },
    {
      "name": "Build.ps1",
      "type": "file",
      "sourcePath": "Autex Toolkit/Build.ps1",
      "summary": "Development build script. Increments devBuild in version.json, patches AssemblyInfo, closes DriveWorks host processes gracefully via WM_CLOSE, runs MSBuild, then optionally runs C# quality checks and WebAssets ESLint before reopening the host."
    },
    {
      "name": "CustomFunctionRuleEvalTests.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Testing/CustomFunctionRuleEvalTests.cs",
      "summary": "Test script validating Autex custom function rule evaluation via ProjectOpen.EvaluateRuleToDisplayString, with numeric tolerance and Titan UDF exception handling."
    },
    {
      "name": "DWTools.slnx",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/DWTools.slnx",
      "summary": "Visual Studio solution filter file for the DWTools plugin project."
    },
    {
      "name": "full-viewport-layers.html",
      "type": "file",
      "sourcePath": "Autex Toolkit/full-viewport-layers.html",
      "summary": "Minimal HTML demo showing a full-viewport image layer with an SVG gradient overlay, used for CSS layer/viewport testing."
    },
    {
      "name": "GroupConnectionIndexTests.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/RuleFormatter.Tests/GroupConnectionIndexTests.cs",
      "summary": "NUnit test class for GroupConnectionIndex. Tests cross-project connection edge detection and macro reference scanning."
    },
    {
      "name": "IconsUdfTests.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/DWPlugin/Core/Testing/IconsUdfTests.cs",
      "summary": "Test suite for Icons user-defined functions. Runs validation tests for icon loading and semantic icon resolution."
    },
    {
      "name": "RuleFormatter.Tests.csproj",
      "type": "file",
      "sourcePath": "Autex Toolkit/RuleFormatter.Tests/RuleFormatter.Tests.csproj",
      "summary": "MSBuild project file for the RuleFormatter.Tests NUnit test assembly. Targets .NET with NUnit3TestAdapter."
    },
    {
      "name": "RuleFormatterTests.cs",
      "type": "file",
      "sourcePath": "Autex Toolkit/RuleFormatter.Tests/RuleFormatterTests.cs",
      "summary": "NUnit test class for RuleFormatter. Tests rule formatting, normalization, operator handling (not-equal, less-or-equal, greater-or-equal), and nested function formatting."
    },
    {
      "name": "scripts/scripts/Debug-ToolkitProjectLoad.ps1",
      "type": "file",
      "sourcePath": "Autex Toolkit/scripts/scripts/Debug-ToolkitProjectLoad.ps1",
      "summary": "Debugging helper that builds the Toolkit, launches DriveWorks Administrator with a .driveprojx file, then monitors for Project Extender load failure dialogs or successful project load via window title heuristics."
    }
  ]
};
