export const DriveWorksRule = ({ children }) => {
  const flatten = (node) => {
    if (node == null) return '';
    if (typeof node === 'string') return node;
    if (Array.isArray(node)) return node.map(flatten).join('');
    if (typeof node === 'object' && node.props?.children) return flatten(node.props.children);
    return String(node);
  };

  const rule = flatten(children).trim();

  return (
    <pre className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 font-mono text-sm text-gray-900 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100">
      <code>{rule}</code>
    </pre>
  );
};
