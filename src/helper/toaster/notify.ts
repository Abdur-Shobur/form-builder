import { message } from 'antd';
type NotificationType = 'success' | 'info' | 'warning' | 'error';

type notificationType = {
  type?: NotificationType;
  description?: string;
};
export const notify = ({
  description = 'Successfully Completed',
  type = 'success',
}: notificationType) => {
  message[type](description);
};
