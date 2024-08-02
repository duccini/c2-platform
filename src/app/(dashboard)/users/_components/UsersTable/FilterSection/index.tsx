import { useRef } from "react";
import useOutsideClick from "../../../_hooks/useOutsideClick";
import { FilterSectionProps } from "../../../_utils/filter.type";
import FilterBtn from "./FilterBtn";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

import styles from "./styles.module.css";

const FilterSection = ({
  search,
  setSearch,
  filters,
  uniqueTeams,
  uniqueTracks,
  uniqueRoles,
  openFilter,
  handleToggleFilter,
  handleFilter,
  handleClearFilter,
}: FilterSectionProps) => {
  const teamRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const roleRef = useRef<HTMLDivElement>(null);

  useOutsideClick([teamRef, trackRef, roleRef], () => handleToggleFilter(""));

  return (
    <section className={styles.filters}>
      <div className={styles.filterSearch}>
        <HiOutlineMagnifyingGlass size={20} />
        <input
          className={styles.filterInput}
          type="text"
          placeholder="Buscar por nome..."
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
      </div>
      <div className={styles.filterBtns}>
        <div ref={teamRef}>
          <FilterBtn
            text="Equipe"
            options={uniqueTeams}
            selectedFilter={filters["equipe"] || ""}
            onFilter={handleFilter}
            onClearFilter={() => handleClearFilter("equipe")}
            isOpen={openFilter === "equipe"}
            onToggle={() => handleToggleFilter("equipe")}
          />
        </div>
        <div ref={trackRef}>
          <FilterBtn
            text="Trilha"
            options={uniqueTracks}
            selectedFilter={filters["trilha"] || ""}
            onFilter={handleFilter}
            onClearFilter={() => handleClearFilter("trilha")}
            isOpen={openFilter === "trilha"}
            onToggle={() => handleToggleFilter("trilha")}
          />
        </div>
        <div ref={roleRef}>
          <FilterBtn
            text="Função"
            options={uniqueRoles}
            selectedFilter={filters["função"] || ""}
            onFilter={handleFilter}
            onClearFilter={() => handleClearFilter("função")}
            isOpen={openFilter === "função"}
            onToggle={() => handleToggleFilter("função")}
          />
        </div>
      </div>
    </section>
  );
};

export default FilterSection;
