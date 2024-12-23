import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { useTable } from "react-table";
import { useOutletContext } from "react-router";

const ManageUsersPage = () => {
    const userData = useOutletContext();
    console.log(userData)
    const columns = useMemo(
        () => [
            { Header: "ID", accessor: "id" },
            { Header: "First Name", accessor: "first_name" },
            { Header: "Last Name", accessor: "last_name" },
            { Header: "Email", accessor: "email" },
            { Header: "Phone", accessor: "phone" },
            { Header: "State", accessor: "state" },
            { Header: "City", accessor: "city" },
            { Header: "Address", accessor: "address" }
        ],
        []
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = useTable({ columns, data: userData });

    return (
        <div className="table-container">
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows?.map((row) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell) => (
                                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default ManageUsersPage