import { useAuth, useUser } from "@clerk/nextjs";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

export const useUserRole = () => {
  const { userId } = useAuth();
  // console.log(user)
  const userData = useQuery(api.users.getUserByClerkId, {
    clerkId: userId || "",
  });

  const isLoading = userData === undefined;   //boolean feild true:userPresent or false:user not present

  return {
    isLoading,
    isInterviewer: userData?.role === "interviewer",
    isCandidate: userData?.role === "candidate",
  };
};