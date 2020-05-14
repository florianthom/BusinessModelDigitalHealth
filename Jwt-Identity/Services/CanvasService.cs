using Jwt_Identity.Models;
using Jwt_Identity.Models.Canvas;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Jwt_Identity.Services
{
    public class CanvasService : ICanvasService
    {
        private readonly ApplicationDbContext db;

        public CanvasService(ApplicationDbContext db)
        {
            this.db = db;
        }

        public BaseCanvas GetCanvasById(int id)
        {
            return db.Canvas.SingleOrDefault(a => a.Id == id);
        }

        public List<BaseCanvas> GetCanvases()
        {
            return db.Canvas.ToList();
        }
    }
}
