import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import getUserDashboard from "../../libs/getUserDashboard";
import { Suspense } from "react";
import { Skeleton } from "@mui/material";
import TransactionCatalog from "@/components/TransactionCatalog";
import getUserTransactions from "@/libs/getUserTransactions";

export default async function DashbordPage() {
  const session = await getServerSession(authOptions);
  if (!session || !session.user.token) return null;

  const profile = await getUserDashboard(session.user.token);
  var createdAt = new Date(profile.data.createdAt);

  const transactions = await getUserTransactions(session.user.token);

  return (
    <main className="text-center p-5 mx-[8%]">
      <div className="text-4xl font-bold m-10 text-left">My profile</div>

      <div className="bg-slate-200  p-5 text-left rounded-2xl">
        <div className="text-xl m-3 font-medium">{profile.data.name}</div>
        <table className="table-auto border-collapse border-separate border-spacing-3">
          <tbody>
            <tr>
              <td>Email: </td>
              <td>{profile.data.email}</td>
            </tr>
            <tr>
              <td>Telephone: </td>
              <td>{profile.data.telephone}</td>
            </tr>
            <tr>
              <td>Member since</td>
              <td>{createdAt.toString()}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/*<div className="text-4xl font-bold pt-10 m-10 text-left">My booking</div>*/}
      <Suspense fallback={<Skeleton />}>
        {/*<AppointmentCatalog appointmentJson={appointment} session={session} />*/}
        <TransactionCatalog transactionJson={transactions} session={session}/>
      </Suspense>
    </main>
  );
}
