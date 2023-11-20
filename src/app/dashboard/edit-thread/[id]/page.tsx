import EditThread from "../../components/EditThread";

const EditThreadPage = ({ params }: { params: { id: number } }) => {
  return (
    <div className="w-full col-span-2">
      <EditThread id={params.id} />
    </div>
  );
};

export default EditThreadPage;
