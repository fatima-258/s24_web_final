import AddTask from "@/components/addTask";
import Boxes from "@/components/boxes";
import Pagination from "@/components/pagination";
import TaskList from "@/components/taskList";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mx-auto container mt-16 gap-8 flex flex-col">
      <Boxes />
      <AddTask />
      <TaskList />
      <Pagination />
    </div>
  );
}
