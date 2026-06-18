import { DriveWorksRule } from '/snippets/DriveWorksRule.jsx';

const Field = ({ label, children }) => (
  <li>
    <strong>{label}:</strong> {children}
  </li>
);

export const CustomFunctionDoc = ({
  name,
  availability,
  inputs,
  output,
  example,
  functionInputs,
  functionOutput,
  taskPicker,
  taskInputs,
  taskOutputs,
  children,
}) => (
  <div className="not-prose my-6 border-b border-gray-200 pb-6 dark:border-gray-800">
    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50">{name}</h3>
    <ul className="mt-2 list-none space-y-1 pl-0 text-sm text-gray-700 dark:text-gray-300">
      {availability ? <Field label="Availability">{availability}</Field> : null}
      {inputs ? <Field label="Inputs">{inputs}</Field> : null}
      {output ? <Field label="Output">{output}</Field> : null}
    </ul>

    {functionInputs || functionOutput ? (
      <div className="mt-2 text-sm text-gray-700 dark:text-gray-300">
        <p className="font-medium">As Function</p>
        <ul className="mt-1 list-none space-y-1 pl-0">
          {functionInputs ? <Field label="Inputs">{functionInputs}</Field> : null}
          {functionOutput ? <Field label="Output">{functionOutput}</Field> : null}
        </ul>
      </div>
    ) : null}

    {example ? (
      <div className="mt-3">
        <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-50">Example</h4>
        <DriveWorksRule>{example}</DriveWorksRule>
      </div>
    ) : null}

    {taskPicker ? (
      <div className="mt-3 text-sm text-gray-700 dark:text-gray-300">
        <p>
          <strong>As task</strong> (picker: <strong>{taskPicker}</strong>)
        </p>
        <ul className="mt-1 list-none space-y-1 pl-0">
          {taskInputs ? <Field label="Inputs">{taskInputs}</Field> : null}
          {taskOutputs ? <Field label="Outputs">{taskOutputs}</Field> : null}
        </ul>
      </div>
    ) : null}

    {children}
  </div>
);
