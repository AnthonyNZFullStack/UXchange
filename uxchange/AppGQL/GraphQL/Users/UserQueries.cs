using System.Linq;
using HotChocolate;
using uxchange.Data;
using uxchange.Models;
using HotChocolate.Types;

namespace uxchange.GraphQL.Users
{
    [ExtendObjectType(name: "Query")]
    public class UserQueries
    {
        public IQueryable<User> GetUsers([ScopedService] AppDbContext context)
        {
            return context.users;
        }
    }
}
