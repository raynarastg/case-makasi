import React, { PropsWithChildren, createContext, useState } from 'react';

import { UserAndReposContextType, UserAndReposType } from '../../types';

export const UserAndReposContext = createContext<UserAndReposContextType>({});

export const UserAndReposProvider: React.FunctionComponent<PropsWithChildren<{}>> = ({ children }) => {
  const [user, setUser] = useState<UserAndReposType | undefined>();

  return <UserAndReposContext.Provider value={{ user, setUser }}>{children}</UserAndReposContext.Provider>;
};
