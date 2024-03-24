"use server";

type statsType = {
  stats: {
    claims: string;
    subscriptions: string;
    payments: string;
  };
};

export const getStats = async (
  user: string
): Promise<{ stats: statsType } | any> => {
  try {
    const response = await fetch(
      `${process.env.ROOT_LINK}/api/actions/clientStats/?user=${user}`
    );
    if (!response) {
      return "Couldnt find stats";
    }
    const res = await response.json();
    return res;
  } catch (e) {
    console.error(e);
  }
};
