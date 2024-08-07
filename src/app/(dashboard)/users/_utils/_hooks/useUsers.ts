import {
  useState,
  useEffect,
  useCallback,
  ChangeEvent,
  FormEvent,
  MouseEvent,
} from "react";
import { USERS_PER_PAGE } from "../constants";
import { UserProps } from "../_types/user.type";
import { EditFormData } from "../_types/form.type";
import data from "../../dataMock.json";

const useUsers = () => {
  // States
  const [users, setUsers] = useState<UserProps[]>(data);
  const [search, setSearch] = useState("");
  const [editUserId, setEditUserId] = useState<number | null>(null);
  const [editFormData, setEditFormData] = useState<EditFormData>({
    name: "",
    team: "",
    track: "",
    permission: "",
    role: "",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState<{ [key: string]: string }>({});
  const [openFilter, setOpenFilter] = useState<string | null>(null);

  // Filter Users
  const filterUsers = useCallback(() => {
    return users.filter((user) => {
      const searchMatch =
        !search || user.name.toLowerCase().includes(search.toLowerCase());

      const filterMatch = Object.keys(filters).every((column) => {
        const columnKey =
          column === "equipe"
            ? "team"
            : column === "trilha"
            ? "track"
            : column === "função"
            ? "role"
            : "";
        const userValue = user[columnKey as keyof UserProps];
        return (
          !filters[column] ||
          (typeof userValue === "string" &&
            userValue.toLowerCase() === filters[column].toLowerCase())
        );
      });

      return searchMatch && filterMatch;
    });
  }, [users, search, filters]);

  // Pagination
  const paginate = useCallback((pageNumber: number) => {
    setCurrentPage(pageNumber);
  }, []);

  const filteredData = filterUsers();
  const lastUserIndex = currentPage * USERS_PER_PAGE;
  const firstUserIndex = lastUserIndex - USERS_PER_PAGE;
  const filteredUsers = filteredData.slice(firstUserIndex, lastUserIndex);

  useEffect(() => {
    setCurrentPage(1);
  }, [search, filters]);

  // Edit Form Handlers
  const handleEditFormChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>): void => {
      const { name, value } = e.target;
      setEditFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    },
    []
  );

  const handleEditFormSubmit = useCallback(
    (e: FormEvent): void => {
      e.preventDefault();
      if (editUserId === null) return;

      const updatedUser = { id: editUserId, ...editFormData };
      setUsers((prevUsers) =>
        prevUsers.map((user) => (user.id === editUserId ? updatedUser : user))
      );
      setEditUserId(null);
    },
    [editUserId, editFormData]
  );

  const handleEditClick = useCallback(
    (e: MouseEvent<HTMLButtonElement>, user: UserProps): void => {
      e.preventDefault();
      setEditUserId(user.id);
      setEditFormData({
        name: user.name,
        team: user.team,
        track: user.track,
        permission: user.permission,
        role: user.role,
      });
    },
    []
  );

  const handleCancelClick = useCallback((): void => {
    setEditUserId(null);
  }, []);

  const handleDeleteClick = useCallback(
    (userId: number): void => {
      if (filteredUsers.length === 1 && currentPage !== 1) {
        setCurrentPage((prev) => prev - 1);
      }
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
    },
    [filteredUsers.length, currentPage]
  );

  // Filter Handlers
  const handleFilterChange = (column: string, value: string) => {
    setFilters((prevFilters) => ({ ...prevFilters, [column]: value }));
  };

  const clearFilter = (column: string) => {
    setFilters((prevFilters) => {
      const newFilters = { ...prevFilters };
      delete newFilters[column];
      return newFilters;
    });
    setOpenFilter(null);
  };

  const handleToggleFilter = (column: string) => {
    setOpenFilter((prev) => (prev === column ? null : column));
  };

  // Unique Values
  const uniqueTeams = Array.from(new Set(users.map((user) => user.team)));
  const uniqueTracks = Array.from(new Set(users.map((user) => user.track)));
  const uniquePermissions = Array.from(
    new Set(users.map((user) => user.permission))
  );
  const uniqueRoles = Array.from(new Set(users.map((user) => user.role)));

  return {
    search,
    USERS_PER_PAGE,
    currentPage,
    filteredData,
    paginate,
    editUserId,
    editFormData,
    filteredUsers,
    setSearch,
    handleEditFormChange,
    handleEditFormSubmit,
    handleEditClick,
    handleCancelClick,
    handleDeleteClick,
    handleFilterChange,
    clearFilter,
    uniqueTeams,
    uniqueTracks,
    uniquePermissions,
    uniqueRoles,
    filters,
    openFilter,
    setOpenFilter,
    handleToggleFilter,
    handleFilter: handleFilterChange,
    handleClearFilter: clearFilter,
  };
};

export default useUsers;
