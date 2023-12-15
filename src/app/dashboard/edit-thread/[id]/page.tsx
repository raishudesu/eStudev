import EditThread from "../../components/EditThread";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Edit thread | eStudev",
};
const EditThreadPage = ({ params }: { params: { id: number } }) => {
  return (
    <div className="w-full col-span-2">
      <EditThread id={params.id} />
    </div>
  );
};

export default EditThreadPage;
