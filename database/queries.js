exports.QUERY_LIST = {

    GET_SALES_FROM_TO :`SELECT ITEMS.NAME , SUM( INVOICES.PRICE) AS SALES FROM JAVEATS_LITE.INVOICES
    JOIN JAVEATS_LITE.ITEMS ON INVOICES.ITEM_ID = ITEMS.ID 
    WHERE INVOICES.CREATEDAT BETWEEN :FROM AND :TO
    GROUP BY INVOICES.ITEM_ID ;` ,

    GET_BEST_SELLER_ITEM :`SELECT ITEMS.NAME , SUM( INVOICES.quantity) AS SALES FROM JAVEATS_LITE.INVOICES
    JOIN JAVEATS_LITE.ITEMS ON INVOICES.ITEM_ID = ITEMS.ID 
    WHERE INVOICES.CREATEDAT BETWEEN :FROM AND :TO
    GROUP BY INVOICES.ITEM_ID 
    order by SALES desc ;`
}