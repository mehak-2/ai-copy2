const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ;

export async function fetchBlogs({
    page = 1,
    limit = 10,
    search = '',
    sortBy = 'createdAt',
    sortOrder = 'desc'
} = {}) {
    const params = new URLSearchParams({
        page: page.toString(),
        limit: limit.toString(),
        status: 'published', // Always filter for published blogs only
        sortBy,
        sortOrder,
        ...(search && { search })
    });

    try {
        const response = await fetch(`${API_BASE_URL}/api/v1/blogs?${params}`, {
            headers: {
                'accept': 'application/json',
            },
            next: { revalidate: 60 } // Cache for 1 minute for SSR
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch blogs: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();

        if (!data.success) {
            throw new Error('API returned unsuccessful response');
        }

        return {
            blogs: data.blogs || [],
            pagination: data.pagination || {
                currentPage: 1,
                totalPages: 1,
                totalBlogs: 0,
                hasNextPage: false,
                hasPrevPage: false
            }
        };
    } catch (error) {
        console.error('Error fetching blogs:', error);
        throw error;
    }
}

export async function fetchBlogBySlug(slug) {
    try {
        const response = await fetch(`${API_BASE_URL}/api/v1/blogs/${slug}`, {
            headers: {
                'accept': 'application/json',
            },
            next: { revalidate: 300 } // Cache for 5 minutes for individual blog posts
        });

        if (!response.ok) {
            if (response.status === 404) {
                return null;
            }
            throw new Error(`Failed to fetch blog: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();

        if (!data.success) {
            throw new Error('API returned unsuccessful response');
        }

        return data.blog || null;
    } catch (error) {
        console.error('Error fetching blog by slug:', error);
        throw error;
    }
} 