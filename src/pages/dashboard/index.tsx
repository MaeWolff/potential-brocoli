import { useUser } from "../../common/hooks/useUser";
import AuthenticatedRoute from "../../layouts/AuthenticatedRoute";
import GlobalLayout from "../../layouts/GlobalLayout";

export default function DashboardPage() {
  const user = useUser();

  return (
    <GlobalLayout>
      <AuthenticatedRoute>
        <>
          Bonjour {user?.data?.email}, bienvenue dans le dashboard
          <button>test</button>
        </>
      </AuthenticatedRoute>
    </GlobalLayout>
  );
}
