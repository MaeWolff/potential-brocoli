import { useUser } from "../../common/hooks/useUser";
import AuthenticatedRoute from "../../layouts/AuthenticatedRoute";
import GlobalLayout from "../../layouts/GlobalLayout";

export default function DashboardPage() {
  const user = useUser();

  console.log(user);
  return (
    <GlobalLayout>
      <AuthenticatedRoute>
        <>
          djsldjs
          <button>test</button>
        </>
      </AuthenticatedRoute>
    </GlobalLayout>
  );
}
