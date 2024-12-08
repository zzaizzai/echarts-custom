"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGraph = createGraph;
var echarts = __importStar(require("echarts"));
function createGraph(id) {
    var chartDom = document.getElementById(id);
    var myChart = echarts.init(chartDom);
    var option = {
        title: {
            text: 'Simple Graph'
        },
        tooltip: {},
        xAxis: {
            data: ['A', 'B', 'C', 'D', 'E', 'F']
        },
        yAxis: {},
        series: [
            {
                name: 'Score',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }
        ],
        grid: {
            left: '100%',
            right: '100%',
            bottom: '100%',
            top: '200%',
            containLabel: true
        }
    };
    myChart.setOption(option);
}
