import { useState } from "react"

export default function FilterForm({ handelFilter, setFilters, filters, action, applicationType }) {


    console.log(filters);
    return (
        <form className="flex justify-center" onSubmit={handelFilter} >
            <div className="p-2">
                <label htmlFor="logID" className="block text-sm font-medium leading-6 text-gray-900">
                    Price
                </label>
                <div className="relative mt-2 rounded-md shadow-sm">
                    <input
                        onChange={(e) => setFilters({ ...filters, id: e.target.value })}
                        type="number"
                        name="logID"
                        id="logID"
                        value={filters.id || ''}
                        className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="e.g 21984"
                    />

                </div>
            </div>
            <div className="p-2">
                <label htmlFor="Action-type" className="block text-sm font-medium leading-6 text-gray-900">
                    Action type
                </label>
                <div className="relative mt-2 rounded-md shadow-sm">
                    <select
                        onChange={(e) => setFilters({ ...filters, action: e.target.value })}
                        name="action"
                        id="Action-type" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                        {action && action.map((ele, index) => {
                            return <option key={index} value={ele} >{ele}</option>
                        })}

                    </select>

                </div>
            </div>
            <div className="p-2">
                <label htmlFor="Application-type" className="block text-sm font-medium leading-6 text-gray-900">
                    Application type
                </label>
                <div className="relative mt-2 rounded-md shadow-sm">
                    <select
                        onChange={(e) => setFilters({ ...filters, appType: e.target.value })}
                        id="Application-type" name="appType" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                        {applicationType && applicationType.map((ele, index) => {
                            if (ele !== null) return <option key={index} value={ele} >{ele}</option>
                        })}
                    </select>

                </div>
            </div >
            <div className="p-2">
                <label htmlFor="from-date" className="block text-sm font-medium leading-6 text-gray-900">
                    From Date
                </label>
                <div className="relative mt-2 rounded-md shadow-sm">
                    <input
                        onChange={(e) => setFilters({ ...filters, fromData: e.target.value })}
                        type="date"
                        name="fromData"
                        id="from-date"

                        className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="0.00"
                    />

                </div>
            </div>
            <div className="p-2">
                <label htmlFor="to-date" className="block text-sm font-medium leading-6 text-gray-900">
                    To Date
                </label>
                <div className="relative mt-2 rounded-md shadow-sm">
                    <input
                        onChange={(e) => setFilters({ ...filters, toDate: e.target.value })}
                        type="date"
                        name="toDate"
                        id="to-date"

                        className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="0.00"
                    />

                </div>
            </div>
            <div className="p-2">
                <label htmlFor="Application-ID" className="block text-sm font-medium leading-6 text-gray-900">
                    Application ID
                </label>
                <div className="relative mt-2 rounded-md shadow-sm">
                    <input
                        onChange={(e) => setFilters({ ...filters, appId: e.target.value })}
                        type="number"
                        name="appId"
                        id="Application-ID"
                        value={filters.appId || ""}
                        className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="0.00"
                    />

                </div>
            </div>
            <div className="flex items-end">
                <button type="submit" className="inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >Search</button>
            </div>

        </form>

    )
}