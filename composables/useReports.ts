export const useReports = () => {
  const getDailyReports = (incidents: any, date: any) => {
    return incidents.filter((incident: any) => incident.date === date);
  };

  const getMonthlyReports = (incidents: any, month: string) => {
    return incidents.filter((incident: any) => incident.date.includes(month));
  };

  const getReportsByStatus = (incidents: any, statusId: number) => {
    return incidents.filter((incident: any) => incident.status_id === statusId);
  };

  const getAllMonths = () => {
    return [
      { id: 1, name: "January" },
      { id: 2, name: "February" },
      { id: 3, name: "March" },
      { id: 4, name: "April" },
      { id: 5, name: "May" },
      { id: 6, name: "June" },
      { id: 7, name: "July" },
      { id: 8, name: "August" },
      { id: 9, name: "September" },
      { id: 10, name: "October" },
      { id: 11, name: "November" },
      { id: 12, name: "December" },
    ];
  }

  return {
    getDailyReports,
    getMonthlyReports,
    getReportsByStatus
  };
}