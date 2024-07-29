import {
  useState,
  useMemo,
  useCallback,
  ChangeEvent,
  FormEvent,
  MouseEvent,
} from "react";
import { UserProps } from "../_utils/user.type";
import { EditFormData } from "../_utils/form.type";
import data from "../dataMock.json";

export const useUsers = () => {
  const [user, setUser] = useState<UserProps[]>(data);
  const [search, setSearch] = useState("");
  const [editUserId, setEditUserId] = useState<number | null>(null);
  const [editFormData, setEditFormData] = useState<EditFormData>({
    name: "",
    team: "",
    track: "",
    permission: "",
    role: "",
  });

  const filteredUser = useMemo(() => {
    return user.filter(
      (user) =>
        search.toLowerCase() === "" || user.name.toLowerCase().includes(search)
    );
  }, [user, search]);

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

      const updatedUser = {
        id: editUserId,
        ...editFormData,
      };

      setUser((prevUser) =>
        prevUser.map((user) => (user.id === editUserId ? updatedUser : user))
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

  const handleDeleteClick = useCallback((userId: number): void => {
    setUser((prevUser) => prevUser.filter((user) => user.id !== userId));
  }, []);

  return {
    user,
    search,
    editUserId,
    editFormData,
    filteredUser,
    setSearch,
    handleEditFormChange,
    handleEditFormSubmit,
    handleEditClick,
    handleCancelClick,
    handleDeleteClick,
  };
};
