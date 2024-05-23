import AdminMatchesForm from "@/components/AdminMatchesForm";
import AdminUserTable from "@/components/AdminUserTable";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function AdminPanel() {
  const [selectedView, setSelectedView] = useState("users");

  return (
    <div className='container mt-8'>
      <div className='flex space-x-4'>
        <Button
          className={`bg-[#304FFE] hover:bg-[#5B74FF] ${
            selectedView === "users" ? "bg-primary hover:bg-primary/90" : ""
          }`}
          onClick={() => setSelectedView("users")}
        >
          Uzytkownicy
        </Button>
        <Button
          className={`bg-[#304FFE] hover:bg-[#5B74FF] ${
            selectedView === "results" ? "bg-primary hover:bg-primary/90" : ""
          }`}
          onClick={() => setSelectedView("results")}
        >
          Wyniki
        </Button>
      </div>
      {selectedView === "users" && <AdminUserTable />}
      {selectedView === "results" && <AdminMatchesForm />}
    </div>
  );
}
