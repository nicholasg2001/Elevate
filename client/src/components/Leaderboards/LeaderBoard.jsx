import { Table } from "flowbite-react";

const LeaderBoard = ({ users }) => {
  return (
    <Table>
      <Table.Head>
        <Table.HeadCell>Placement</Table.HeadCell>
        <Table.HeadCell>Name</Table.HeadCell>
        <Table.HeadCell>Height</Table.HeadCell>
        <Table.HeadCell>Weight</Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y shadow-xl dark:bg-slate-500">
        {users.map((user, index) => (
          <Table.Row key={user.id} className="bg-white dark:bg-slate-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-gray-400">
              {index + 4}
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-gray-400">
              <div className="flex items-center">
                <img
                  alt=""
                  className="h-12 w-12 rounded-full border dark:border-gray-700 dark:bg-gray-500 mr-4"
                  src={user.profileurl}
                />
                <span>{user.name}</span>
              </div>
            </Table.Cell>
            <Table.Cell>{user.height}</Table.Cell>
            <Table.Cell>{user.weight}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

export default LeaderBoard;
