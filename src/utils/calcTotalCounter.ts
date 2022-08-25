export const calcTotalCounter = (items: any) => {
	return items.reduce((sum: any, obj: any) => obj.count + sum, 0);
};
