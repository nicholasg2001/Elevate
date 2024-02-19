const UserInfoTab = () => {
  return (
    <div className="p-6 bg-gray-50 text-medium text-gray-500 rounded-lg w-full">
      <h3 className="text-lg font-bold text-gray-900 mb-2">User Info</h3>
      <p className="mb-2">
        This is some placeholder content the User Info tab's associated content,
        clicking another tab will toggle the visibility of this one for the
        next.
      </p>
      <p>
        The tab JavaScript swaps classes to control the content visibility and
        styling.
      </p>
    </div>
  );
};

export default UserInfoTab;
