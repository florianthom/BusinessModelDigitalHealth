using Jwt_Identity.Models.Canvas;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Jwt_Identity.Services
{
    public interface ICanvasService
    {
        List<BaseCanvas> GetCanvases();

        BaseCanvas GetCanvasById(int id);
    }
}
