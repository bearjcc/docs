import { LAYERS } from './architecture-layers/layers.js';

export const ArchitectureLayerTable = ({ layer }) => {
  const rows = LAYERS[layer] || [];
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) {
      return rows;
    }
    return rows.filter(
      (row) =>
        row.name.toLowerCase().includes(q) ||
        row.sourcePath.toLowerCase().includes(q) ||
        row.summary.toLowerCase().includes(q)
    );
  }, [rows, query]);

  return (
    <div className="not-prose my-4">
      <label className="mb-2 flex flex-col gap-1 text-sm text-gray-700 dark:text-gray-300">
        <span className="font-medium">Filter components</span>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Name, path, or summary"
          className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-100"
        />
      </label>
      <p className="mb-3 text-xs text-gray-500 dark:text-gray-400">
        Showing {filtered.length} of {rows.length} file nodes
      </p>
      <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700">
        <table className="min-w-full divide-y divide-gray-200 text-left text-sm dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-900">
            <tr>
              <th className="px-3 py-2 font-medium text-gray-900 dark:text-gray-50">Name</th>
              <th className="px-3 py-2 font-medium text-gray-900 dark:text-gray-50">Type</th>
              <th className="px-3 py-2 font-medium text-gray-900 dark:text-gray-50">Source path</th>
              <th className="px-3 py-2 font-medium text-gray-900 dark:text-gray-50">Summary</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 bg-white dark:divide-gray-800 dark:bg-gray-950">
            {filtered.map((row) => (
              <tr key={`${row.sourcePath}-${row.name}`}>
                <td className="px-3 py-2 align-top font-mono text-xs text-gray-900 dark:text-gray-100">{row.name}</td>
                <td className="px-3 py-2 align-top text-gray-700 dark:text-gray-300">{row.type}</td>
                <td className="px-3 py-2 align-top font-mono text-xs text-gray-700 dark:text-gray-300">{row.sourcePath}</td>
                <td className="px-3 py-2 align-top text-gray-700 dark:text-gray-300">{row.summary}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
