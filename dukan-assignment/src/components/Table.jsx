import { CiSearch } from "react-icons/ci";
import { MdOutlineFileDownload } from "react-icons/md";
const arrayData = [
  {
    Date: new Date("2023-01-01"),
    Status: "Completed",
    TransactionID: "ABC123",
    OrderAmount: 100.0,
    TransactionFees: 2.0,
    Total: 102.0,
  },
  {
    Date: new Date("2023-02-05"),
    Status: "Pending",
    TransactionID: "DEF456",
    OrderAmount: 75.5,
    TransactionFees: 1.5,
    Total: 77.0,
  },
  {
    Date: new Date("2023-03-10"),
    Status: "Completed",
    TransactionID: "GHI789",
    OrderAmount: 200.75,
    TransactionFees: 3.5,
    Total: 204.25,
  },
  {
    Date: new Date("2023-04-15"),
    Status: "Failed",
    TransactionID: "JKL012",
    OrderAmount: 50.25,
    TransactionFees: 1.0,
    Total: 51.25,
  },
  {
    Date: new Date("2023-05-20"),
    Status: "Completed",
    TransactionID: "MNO345",
    OrderAmount: 150.0,
    TransactionFees: 2.75,
    Total: 152.75,
  },
  {
    Date: new Date("2023-06-25"),
    Status: "Pending",
    TransactionID: "PQR678",
    OrderAmount: 120.5,
    TransactionFees: 2.25,
    Total: 122.75,
  },
  {
    Date: new Date("2023-07-30"),
    Status: "Completed",
    TransactionID: "STU901",
    OrderAmount: 80.75,
    TransactionFees: 1.25,
    Total: 82.0,
  },
  {
    Date: new Date("2023-08-05"),
    Status: "Failed",
    TransactionID: "VWX234",
    OrderAmount: 90.2,
    TransactionFees: 1.5,
    Total: 91.7,
  },
];

const MyTable = () => {
  return (
    <div>
      <div className="flex items-center justify-between mt-10 mb-4">
        <div className="flex border border-gray-400 px-4 py-1 w-1/4 items-center gap-1.6vw bg-white-200 ">
          <CiSearch size="1rem" />
          <input
            className="px-6 outline-none"
            type="text"
            placeholder="Order Id or Transaction ID
"
          />
        </div>
        <div className="flex gap-8">
          <div className="border border-gray-300 py-1 px-3">SORT ↑ ↓</div>
          <div className="border border-gray-300 py-1 px-3">
            <MdOutlineFileDownload />
          </div>
        </div>
      </div>

      <div class="relative  overflow-x-auto shadow-md sm:lg">
        <table class="w-full text-sm  text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-200 ">
            <tr>
              <th scope="col" class="px-6 py-3">
                Date
              </th>
              <th scope="col" class="px-6 py-3">
                Status
              </th>
              <th scope="col" class="px-6 py-3">
                Transaction id
              </th>
              <th scope="col" class="px-6 py-3">
                Order Amount
              </th>
              <th scope="col" class="px-6 py-3">
                Transaction Fees
              </th>
              <th scope="col" class="px-6 py-3">
                Total
              </th>
            </tr>
          </thead>
          <tbody className=" text-black">
            {arrayData?.map((elem) => {
              return (
                <tr class="bg-white border-b ">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium whitespace-nowrap text-blue-500"
                  >
                    {elem.Date.toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </th>
                  <td class="px-6 py-2 ">{elem.Status}</td>
                  <td class="px-6 py-2">{elem.TransactionID}</td>
                  <td class="px-6 py-2">₹ {elem.OrderAmount}</td>

                  <td class="px-6 py-2">₹ {elem.TransactionFees}</td>
                  <td class="px-6 py-2">₹ {elem.Total}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyTable;
