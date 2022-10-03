

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    const customerId = event.pathParameters.customerId;
    const customer = {'customerId': customerId, 'customerName': "Customer" + customerId };
    console.log(`EVENT: ${JSON.stringify(event)}`);

    return {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
     headers: {
         "Access-Control-Allow-Origin": "*",
         "Access-Control-Allow-Headers": "*"
     }, 
        body: JSON.stringify(customer),
    };
};
