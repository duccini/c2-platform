import {
  useState,
  useEffect,
  useCallback,
  ChangeEvent,
  FormEvent,
  MouseEvent,
} from "react";
import { UserProps } from "../_utils/user.type";
import { EditFormData } from "../_utils/form.type";
import data from "../dataMock.json";

export const useUsers = () => {
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
  const [filter, setFilter] = useState<{ column: string; value: string }>({
    column: "",
    value: "",
  });
  const [openFilter, setOpenFilter] = useState<string | null>(null);

  const usersPerPage = 12;

  const filteredData = users.filter((user) => {
    const searchMatch =
      !search || user.name.toLowerCase().includes(search.toLowerCase());

    const columnKey =
      filter.column === "equipe"
        ? "team"
        : filter.column === "trilha"
        ? "track"
        : filter.column === "função"
        ? "role"
        : "";

    const userValue = user[columnKey as keyof UserProps];
    const filterMatch =
      !filter.column ||
      (typeof userValue === "string" &&
        userValue.toLowerCase() === filter.value.toLowerCase());

    return searchMatch && filterMatch;
  });

  const lastUserIndex = currentPage * usersPerPage;
  const firstUserIndex = lastUserIndex - usersPerPage;
  const filteredUsers = filteredData.slice(firstUserIndex, lastUserIndex);

  useEffect(() => {
    setCurrentPage(1);
  }, [search, filter]);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

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

  const handleFilterChange = (column: string, value: string) => {
    setFilter({ column, value });
  };

  const clearFilter = () => {
    setFilter({ column: "", value: "" });
    setOpenFilter(null);
  };

  const handleToggleFilter = (column: string) => {
    setOpenFilter((prev) => (prev === column ? null : column));
  };

  const uniqueTeams = Array.from(new Set(users.map((user) => user.team)));
  const uniqueTracks = Array.from(new Set(users.map((user) => user.track)));
  const uniqueRoles = Array.from(new Set(users.map((user) => user.role)));

  return {
    search,
    usersPerPage,
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
    uniqueRoles,
    filter,
    openFilter,
    setOpenFilter,
    handleToggleFilter,
    handleFilter: handleFilterChange,
    handleClearFilter: clearFilter,
  };
};
