//
//  CardListHeaderView.swift
//  ToDoListApp
//
//  Created by Cory Kim on 2020/04/07.
//  Copyright © 2020 corykim0829. All rights reserved.
//

import UIKit

class BedgeView: UIView {
    
    fileprivate let height: CGFloat = 26
    var bedgeLabel: UILabel!
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        configure()
    }
    
    required init?(coder: NSCoder) {
        super.init(coder: coder)
        configure()
    }
    
    private func configure() {
        layer.cornerRadius = height / 2
    }
    
    func updateBedge(bedgeCount count: Int) {
        bedgeLabel.text = String(count)
    }
}
