import { useEffect } from "react";
import Link from "next/link";
import { toast } from "sonner";

import { NotificationItem } from "../components/notifications/notification-list";
import { useAlert } from "@/context/alerts-context";
import { Alert, AlertType, BasicData } from "@/types/alert";
import { NotificationData } from "@/types";

// TODO: Different styles for different alert types
const useAlertToast = () => {
  const { alert } = useAlert();

  const alertContent = (alert: Alert) => {
    if (alert.type === AlertType.NOTIFICATION) {
      const alertData = alert.data as NotificationData;
      return (
        <div>
          <NotificationItem notification={alertData} />
        </div>
      );
    } else {
      const alertData = alert.data as BasicData;
      return (
        <div>
          <Link href={`${alertData.link}`}>
            <p className="font-bold">{alertData.title}</p>
            <p>{alertData.description}</p>
          </Link>
        </div>
      );
    }
  };

  useEffect(() => {
    if (alert) {
      toast.info(alertContent(alert), {
        unstyled: true,
        position: "bottom-right",
        classNames: { toast: "bg-greycontent/60 backdrop-blur-lg rounded-md p-2" },
      });
    }
  }, [alert]);
};

export default useAlertToast;
