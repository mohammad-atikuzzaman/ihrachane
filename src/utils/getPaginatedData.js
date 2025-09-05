import dbConnect from "@/lib/mongodb";
/**
 * Pagination Helper with Populate
 * @param {Object} model - Mongoose model
 * @param {Object} query - Express/Next req.query object
 * @param {Array} searchFields - যেসব ফিল্ডে সার্চ হবে
 * @param {Array|String} populateFields - যেসব ফিল্ড populate হবে
 */
export const getPaginatedData = async (
  model,
  query,
  searchFields = [],
  populateFields = []
) => {
  try {
    await dbConnect(); // Ensure DB connection

    // Pagination & Sorting
    const page = parseInt(query.page) || 1;
    const limit = parseInt(query.limit) || 10;
    const sortField = query.sortField || "createdAt";
    const sortOrder = query.sortOrder === "asc" ? 1 : -1;
    const search = query.search || "";

    // Search condition
    let searchCondition = {};
    if (search && searchFields.length > 0) {
      searchCondition = {
        $or: searchFields.map((field) => ({
          [field]: { $regex: search, $options: "i" },
        })),
      };
    }

    // Total count
    const totalDocuments = await model.countDocuments(searchCondition);

    // Query তৈরি করি
    let dbQuery = model
      .find(searchCondition)
      .sort({ [sortField]: sortOrder })
      .skip((page - 1) * limit)
      .limit(limit);

    // Populate handle করি (এক বা একাধিক field)
    if (populateFields && populateFields.length > 0) {
      if (Array.isArray(populateFields)) {
        populateFields.forEach((field) => {
          dbQuery = dbQuery.populate(field);
        });
      } else {
        dbQuery = dbQuery.populate(populateFields);
      }
    }

    // Data execute
    const data = await dbQuery;

    return {
      success: true,
      pagination: {
        totalDocuments,
        totalPages: Math.ceil(totalDocuments / limit),
        currentPage: page,
        limit,
      },
      data,
    };
  } catch (error) {
    return { success: false, message: error.message };
  }
};
