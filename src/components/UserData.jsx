// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const UserData = () => {
//     const [users, setUsers] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [newUser, setNewUser] = useState({ name: '', password: '' });
//     const [editUser, setEditUser] = useState({ id: null, name: '', password: '' });

//     useEffect(() => {
//         fetchUsers();
//     }, []);

//     const fetchUsers = async () => {
//         try {
//             const response = await axios.get('http://127.0.0.1:5000/api/data');
//             setUsers(response.data);
//             setLoading(false);
//         } catch (err) {
//             setError('Error fetching data');
//             setLoading(false);
//         }
//     };

//     const handleAddUser = async () => {
//         try {
//             await axios.post('http://127.0.0.1:5000/api/data', newUser);
//             fetchUsers();  // Refresh user list after adding a new user
//             setNewUser({ name: '', password: '' });  // Clear the input fields
//         } catch (err) {
//             setError('Error adding user');
//         }
//     };

//     const handleUpdateUser = async () => {
//         try {
//             await axios.put(`http://127.0.0.1:5000/api/data/${editUser.id}`, editUser);
//             fetchUsers();  // Refresh user list after updating the user
//             setEditUser({ id: null, name: '', password: '' });  // Clear edit form
//         } catch (err) {
//             setError('Error updating user');
//         }
//     };

//     const handleDeleteUser = async (id) => {
//         try {
//             await axios.delete(`http://127.0.0.1:5000/api/data/${id}`);
//             fetchUsers();  // Refresh user list after deletion
//         } catch (err) {
//             setError('Error deleting user');
//         }
//     };

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     if (error) {
//         return <div>{error}</div>;
//     }

//     return (
//         <div>
//             <h1 className='text-center'>User Data</h1>
            
//             <div className="container">
//                 <div className="row mb-3">
//                     <div className="col">
//                         <input
//                             type="text"
//                             className="form-control"
//                             placeholder="Name"
//                             value={newUser.name}
//                             onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
//                         />
//                     </div>
//                     <div className="col">
//                         <input
//                             type="password"
//                             className="form-control"
//                             placeholder="Password"
//                             value={newUser.password}
//                             onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
//                         />
//                     </div>
//                     <div className="col">
//                         <button className="btn btn-primary" onClick={handleAddUser}>Add User</button>
//                     </div>
//                 </div>

//                 <div className="row mb-3">
//                     <div className="col">
//                         <input
//                             type="text"
//                             className="form-control"
//                             placeholder="Name"
//                             value={editUser.name}
//                             onChange={(e) => setEditUser({ ...editUser, name: e.target.value })}
//                         />
//                     </div>
//                     <div className="col">
//                         <input
//                             type="password"
//                             className="form-control"
//                             placeholder="Password"
//                             value={editUser.password}
//                             onChange={(e) => setEditUser({ ...editUser, password: e.target.value })}
//                         />
//                     </div>
//                     <div className="col">
//                         {editUser.id && (
//                             <button className="btn btn-warning" onClick={handleUpdateUser}>Update User</button>
//                         )}
//                     </div>
//                 </div>
                
//                 <table className='table table-hover'>
//                     <thead>
//                         <tr>
//                             <th>ID</th>
//                             <th>Name</th>
//                             <th>Password</th>
//                             <th>Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {users.map((user) => (
//                             <tr key={user.id}>
//                                 <td>{user.id}</td>
//                                 <td>{user.name}</td>
//                                 <td>{user.password}</td>
//                                 <td>
//                                     <button className="btn btn-info" onClick={() => setEditUser(user)}>Edit</button>
//                                     <button className="btn btn-danger" onClick={() => handleDeleteUser(user.id)}>Delete</button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default UserData;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const UserData = () => {
//     const [users, setUsers] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [newUser, setNewUser] = useState({ name: '', password: '', image: null });
//     const [editUser, setEditUser] = useState({ id: null, name: '', password: '', image: null });

//     useEffect(() => {
//         fetchUsers();
//     }, []);

//     const fetchUsers = async () => {
//         try {
//             const response = await axios.get('http://127.0.0.1:5000/api/data');
//             setUsers(response.data);
//             setLoading(false);
//         } catch (err) {
//             setError('Error fetching data');
//             setLoading(false);
//         }
//     };

//     const handleAddUser = async () => {
//         const formData = new FormData();
//         formData.append('name', newUser.name);
//         formData.append('password', newUser.password);
//         if (newUser.image) {
//             formData.append('image', newUser.image);
//         }

//         try {
//             await axios.post('http://127.0.0.1:5000/api/data', formData, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data',
//                 },
//             });
//             fetchUsers(); // Refresh user list after adding a new user
//             setNewUser({ name: '', password: '', image: null }); // Clear input fields
//         } catch (err) {
//             setError('Error adding user');
//         }
//     };

//     const handleUpdateUser = async () => {
//         const formData = new FormData();
//         formData.append('name', editUser.name);
//         formData.append('password', editUser.password);
//         if (editUser.image) {
//             formData.append('image', editUser.image);
//         }

//         try {
//             await axios.put(`http://127.0.0.1:5000/api/data/${editUser.id}`, formData, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data',
//                 },
//             });
//             fetchUsers(); // Refresh user list after updating the user
//             setEditUser({ id: null, name: '', password: '', image: null }); // Clear edit form
//         } catch (err) {
//             setError('Error updating user');
//         }
//     };

//     const handleDeleteUser = async (id) => {
//         try {
//             await axios.delete(`http://127.0.0.1:5000/api/data/${id}`);
//             fetchUsers(); // Refresh user list after deletion
//         } catch (err) {
//             setError('Error deleting user');
//         }
//     };

//     const handleImageChange = (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             setNewUser({ ...newUser, image: file });
//         }
//     };

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     if (error) {
//         return <div>{error}</div>;
//     }

//     return (
//         <div>
//             <h1 className='text-center'>User Data</h1>
            
//             <div className="container">
//                 {/* Add User Form */}
//                 <div className="row mb-3">
//                     <div className="col">
//                         <input
//                             type="text"
//                             className="form-control"
//                             placeholder="Name"
//                             value={newUser.name}
//                             onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
//                         />
//                     </div>
//                     <div className="col">
//                         <input
//                             type="password"
//                             className="form-control"
//                             placeholder="Password"
//                             value={newUser.password}
//                             onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
//                         />
//                     </div>
//                     <div className="col">
//                         <input
//                             type="file"
//                             className="form-control"
//                             onChange={handleImageChange}
//                         />
//                     </div>
//                     <div className="col">
//                         <button className="btn btn-primary" onClick={handleAddUser}>Add User</button>
//                     </div>
//                 </div>

//                 {/* Edit User Form */}
//                 <div className="row mb-3">
//                     <div className="col">
//                         <input
//                             type="text"
//                             className="form-control"
//                             placeholder="Name"
//                             value={editUser.name}
//                             onChange={(e) => setEditUser({ ...editUser, name: e.target.value })}
//                         />
//                     </div>
//                     <div className="col">
//                         <input
//                             type="password"
//                             className="form-control"
//                             placeholder="Password"
//                             value={editUser.password}
//                             onChange={(e) => setEditUser({ ...editUser, password: e.target.value })}
//                         />
//                     </div>
//                     <div className="col">
//                         <input
//                             type="file"
//                             className="form-control"
//                             onChange={(e) => setEditUser({ ...editUser, image: e.target.files[0] })}
//                         />
//                     </div>
//                     <div className="col">
//                         {editUser.id && (
//                             <button className="btn btn-warning" onClick={handleUpdateUser}>Update User</button>
//                         )}
//                     </div>
//                 </div>
                
//                 {/* Users Table */}
//                 <table className='table table-hover'>
//                     <thead>
//                         <tr>
//                             <th>ID</th>
//                             <th>Name</th>
//                             <th>Password</th>
//                             <th>Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {users.map((user) => (
//                             <tr key={user.id}>
//                                 <td>{user.id}</td>
//                                 <td>{user.name}</td>
//                                 <td>{user.password}</td>
//                                 <td>
//                                     <button className="btn btn-info" onClick={() => setEditUser(user)}>Edit</button>
//                                     <button className="btn btn-danger" onClick={() => handleDeleteUser(user.id)}>Delete</button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default UserData;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const UserData = () => {
//     const [users, setUsers] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [newUser, setNewUser] = useState({ name: '', password: '', image: null });
//     const [editUser, setEditUser] = useState({ id: null, name: '', password: '', image: null });

//     useEffect(() => {
//         fetchUsers();
//     }, []);

//     const fetchUsers = async () => {
//         try {
//             const response = await axios.get('http://127.0.0.1:5000/api/data');
//             setUsers(response.data);
//             setLoading(false);
//         } catch (err) {
//             setError('Error fetching data');
//             setLoading(false);
//         }
//     };

//     const handleAddUser = async () => {
//         const formData = new FormData();
//         formData.append('name', newUser.name);
//         formData.append('password', newUser.password);
//         if (newUser.image) {
//             formData.append('image', newUser.image);
//         }

//         try {
//             await axios.post('http://127.0.0.1:5000/api/data', formData, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data',
//                 },
//             });
//             fetchUsers(); // Refresh user list after adding a new user
//             setNewUser({ name: '', password: '', image: null }); // Clear input fields
//         } catch (err) {
//             setError('Error adding user');
//         }
//     };

//     const handleUpdateUser = async () => {
//         const formData = new FormData();
//         formData.append('name', editUser.name);
//         formData.append('password', editUser.password);
//         if (editUser.image) {
//             formData.append('image', editUser.image);
//         }

//         try {
//             await axios.put(`http://127.0.0.1:5000/api/data/${editUser.id}`, formData, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data',
//                 },
//             });
//             fetchUsers(); // Refresh user list after updating the user
//             setEditUser({ id: null, name: '', password: '', image: null }); // Clear edit form
//         } catch (err) {
//             setError('Error updating user');
//         }
//     };

//     const handleDeleteUser = async (id) => {
//         try {
//             await axios.delete(`http://127.0.0.1:5000/api/data/${id}`);
//             fetchUsers(); // Refresh user list after deletion
//         } catch (err) {
//             setError('Error deleting user');
//         }
//     };

//     const handleImageChange = (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             setNewUser({ ...newUser, image: file });
//         }
//     };

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     if (error) {
//         return <div>{error}</div>;
//     }

//     return (
//         <div>
//             <h1 className='text-center'>User Data</h1>
            
//             <div className="container">
//                 {/* Add User Form */}
//                 <div className="row mb-3">
//                     <div className="col">
//                         <input
//                             type="text"
//                             className="form-control"
//                             placeholder="Name"
//                             value={newUser.name}
//                             onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
//                         />
//                     </div>
//                     <div className="col">
//                         <input
//                             type="password"
//                             className="form-control"
//                             placeholder="Password"
//                             value={newUser.password}
//                             onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
//                         />
//                     </div>
//                     <div className="col">
//                         <input
//                             type="file"
//                             className="form-control"
//                             onChange={handleImageChange}
//                         />
//                     </div>
//                     <div className="col">
//                         <button className="btn btn-primary" onClick={handleAddUser}>Add User</button>
//                     </div>
//                 </div>

//                 {/* Edit User Form */}
//                 <div className="row mb-3">
//                     <div className="col">
//                         <input
//                             type="text"
//                             className="form-control"
//                             placeholder="Name"
//                             value={editUser.name}
//                             onChange={(e) => setEditUser({ ...editUser, name: e.target.value })}
//                         />
//                     </div>
//                     <div className="col">
//                         <input
//                             type="password"
//                             className="form-control"
//                             placeholder="Password"
//                             value={editUser.password}
//                             onChange={(e) => setEditUser({ ...editUser, password: e.target.value })}
//                         />
//                     </div>
//                     <div className="col">
//                         <input
//                             type="file"
//                             className="form-control"
//                             onChange={(e) => setEditUser({ ...editUser, image: e.target.files[0] })}
//                         />
//                     </div>
//                     <div className="col">
//                         {editUser.id && (
//                             <button className="btn btn-warning" onClick={handleUpdateUser}>Update User</button>
//                         )}
//                     </div>
//                 </div>
                
//                 {/* Users Table */}
//                 <table className='table table-hover'>
//                     <thead>
//                         <tr>
//                             <th>ID</th>
//                             <th>Name</th>
//                             <th>Password</th>
//                             <th>Image</th> {/* Added column for Image */}
//                             <th>Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {users.map((user) => (
//                             <tr key={user.id}>
//                                 <td>{user.id}</td>
//                                 <td>{user.name}</td>
//                                 <td>{user.password}</td>
//                                 <td>
//                                     {/* Display image if available */}
//                                     {user.image && (
//                                         <img
//                                             src={`http://127.0.0.1:5000/${user.image}`} // Path to image file
//                                             alt="User Image"
//                                             style={{ width: '50px', height: '50px' }}
//                                         />
//                                     )}
//                                 </td>
//                                 <td>
//                                     <button className="btn btn-info" onClick={() => setEditUser(user)}>Edit</button>
//                                     <button className="btn btn-danger" onClick={() => handleDeleteUser(user.id)}>Delete</button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default UserData;



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const UserData = () => {
//     const [users, setUsers] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [newUser, setNewUser] = useState({ name: '', password: '', image: null });
//     const [editUser, setEditUser] = useState({ id: null, name: '', password: '', image: null });

//     useEffect(() => {
//         fetchUsers();
//     }, []);

//     const fetchUsers = async () => {
//         try {
//             const response = await axios.get('http://127.0.0.1:5000/api/data');
//             setUsers(response.data);
//             setLoading(false);
//         } catch (err) {
//             setError('Error fetching data');
//             setLoading(false);
//         }
//     };

//     const handleAddUser = async () => {
//         const formData = new FormData();
//         formData.append('name', newUser.name);
//         formData.append('password', newUser.password);
//         if (newUser.image) {
//             formData.append('image', newUser.image);
//         }

//         try {
//             await axios.post('http://127.0.0.1:5000/api/data', formData, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data',
//                 },
//             });
//             fetchUsers(); // Refresh user list after adding a new user
//             setNewUser({ name: '', password: '', image: null }); // Clear input fields
//         } catch (err) {
//             setError('Error adding user');
//         }
//     };

//     const handleUpdateUser = async () => {
//         const formData = new FormData();
//         formData.append('name', editUser.name);
//         formData.append('password', editUser.password);
//         if (editUser.image) {
//             formData.append('image', editUser.image);
//         }

//         try {
//             await axios.put(`http://127.0.0.1:5000/api/data/${editUser.id}`, formData, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data',
//                 },
//             });
//             fetchUsers(); // Refresh user list after updating the user
//             setEditUser({ id: null, name: '', password: '', image: null }); // Clear edit form
//         } catch (err) {
//             setError('Error updating user');
//         }
//     };

//     const handleDeleteUser = async (id) => {
//         try {
//             await axios.delete(`http://127.0.0.1:5000/api/data/${id}`);
//             fetchUsers(); // Refresh user list after deletion
//         } catch (err) {
//             setError('Error deleting user');
//         }
//     };

//     const handleImageChange = (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             setNewUser({ ...newUser, image: file });
//         }
//     };

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     if (error) {
//         return <div>{error}</div>;
//     }

//     return (
//         <div>
//             <h1 className='text-center'>User Data</h1>
            
//             <div className="container">
//                 {/* Add User Form */}
//                 <div className="row mb-3">
//                     <div className="col">
//                         <input
//                             type="text"
//                             className="form-control"
//                             placeholder="Name"
//                             value={newUser.name}
//                             onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
//                         />
//                     </div>
//                     <div className="col">
//                         <input
//                             type="password"
//                             className="form-control"
//                             placeholder="Password"
//                             value={newUser.password}
//                             onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
//                         />
//                     </div>
//                     <div className="col">
//                         <input
//                             type="file"
//                             className="form-control"
//                             onChange={handleImageChange}
//                         />
//                     </div>
//                     <div className="col">
//                         <button className="btn btn-primary" onClick={handleAddUser}>Add User</button>
//                     </div>
//                 </div>

//                 {/* Edit User Form */}
//                 <div className="row mb-3">
//                     <div className="col">
//                         <input
//                             type="text"
//                             className="form-control"
//                             placeholder="Name"
//                             value={editUser.name}
//                             onChange={(e) => setEditUser({ ...editUser, name: e.target.value })}
//                         />
//                     </div>
//                     <div className="col">
//                         <input
//                             type="password"
//                             className="form-control"
//                             placeholder="Password"
//                             value={editUser.password}
//                             onChange={(e) => setEditUser({ ...editUser, password: e.target.value })}
//                         />
//                     </div>
//                     <div className="col">
//                         <input
//                             type="file"
//                             className="form-control"
//                             onChange={(e) => setEditUser({ ...editUser, image: e.target.files[0] })}
//                         />
//                     </div>
//                     <div className="col">
//                         {editUser.id && (
//                             <button className="btn btn-warning" onClick={handleUpdateUser}>Update User</button>
//                         )}
//                     </div>
//                 </div>
                
//                 {/* Users Table */}
//                 <table className='table table-hover'>
//                     <thead>
//                         <tr>
//                             <th>ID</th>
//                             <th>Name</th>
//                             <th>Password</th>
//                             <th>Image</th>
//                             <th>Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {users.map((user) => (
//                             <tr key={user.id}>
//                                 <td>{user.id}</td>
//                                 <td>{user.name}</td>
//                                 <td>{user.password}</td>
//                                 <td>
//                                     {user.image ? (
//                                         <img src={user.image} alt="User" style={{ width: 30, height: 30 }} />
//                                     ) : (
//                                         'No image'
//                                     )}
//                                 </td>
//                                 <td>
//                                     <button className="btn btn-info" onClick={() => setEditUser(user)}>Edit</button>
//                                     <button className="btn btn-danger" onClick={() => handleDeleteUser(user.id)}>Delete</button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default UserData;
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserData() {
  // State to store the user data from the API
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from Flask API
  useEffect(() => {
    const fetchData = async () => {
      try {
        // URL to your Flask API endpoint
        const response = await axios.get('https://ratana007.pythonanywhere.com/api/data');
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError('Failed to load data');
        setLoading(false);
      }
    };

    fetchData();
  }, []);  // Empty dependency array ensures this runs only once when the component mounts

  if (loading) {
    return <div>Loading...</div>;  // Show loading state
  }

  if (error) {
    return <div>{error}</div>;  // Show error message if the data fetch fails
  }

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {data.map((user) => (
          <li key={user.id}>
            <h3>{user.name}</h3>
            <p>Password: {user.password}</p>
            {user.image && <img src={user.image} alt={user.name} width="100" />}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserData;
