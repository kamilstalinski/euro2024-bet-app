import AdminMatchesForm from "@/components/AdminMatchesForm";
import AdminUserTable from "@/components/AdminUserTable";
import Header from "@/components/layout/Header";
import HeaderLink from "@/components/layout/HeaderLink";
import { useState } from "react";

export default function AdminPanel() {
  const [selectedView, setSelectedView] = useState("users");

  const handleClick = (selectedView: string) => {
    setSelectedView(selectedView);
  };

  return (
    <>
      <Header>
        <HeaderLink
          links={["users", "results"]}
          labels={["Użytkownicy", "Wyniki"]}
          selectedView={selectedView}
          handleClick={handleClick}
        />
      </Header>
      {selectedView === "users" && <AdminUserTable />}
      {selectedView === "results" && <AdminMatchesForm />}
    </>
  );
}
