export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const page = query.page || 1
  const limit = query.limit || 16
  
  const config = useRuntimeConfig()

  try {
    const response = await $fetch(`${config.public.apiBase}/products`, {
      params: {
        page,
        limit
      }
    })

    return response
  } catch (error) {
    console.error('Products API error:', error);
    
    throw createError({
      statusCode: 500,
      statusMessage: 'Произошла ошибка при загрузке товаров',
      data: {
        page,
        limit
      }
    });
  }
})