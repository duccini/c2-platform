export type FilterSectionProps = {
  search: string;
  setSearch: (search: string) => void;
  filters: { [key: string]: string };
  uniqueTeams: string[];
  uniqueTracks: string[];
  uniqueRoles: string[];
  openFilter: string | null;
  handleToggleFilter: (column: string) => void;
  handleFilter: (column: string, value: string) => void;
  handleClearFilter: (column: string) => void;
};
